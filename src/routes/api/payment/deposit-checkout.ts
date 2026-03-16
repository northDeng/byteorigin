import { createFileRoute } from "@tanstack/react-router"
import { z } from "zod/v4"
import { getPaymentAdapter } from "@/integrations/payment/"
import { OrderService } from "@/services/order.service"
import { logger } from "@/shared/lib/tools/logger"
import { Resp } from "@/shared/lib/tools/response"
import { apiAuthMiddleware } from "@/shared/middleware/auth.middleware"
import type { PaymentProvider } from "@/shared/types/payment"

const checkoutSchema = z.object({
  serviceType: z.enum(["miniprogram", "h5", "app", "pc", "consulting"]),
  provider: z.enum(["wechat", "alipay"]),
  contactName: z.string().min(1),
  contactPhone: z.string().min(1),
  requirements: z.string().optional(),
  successUrl: z.string().url().optional(),
  cancelUrl: z.string().url().optional(),
})

export const Route = createFileRoute("/api/payment/deposit-checkout")({
  server: {
    middleware: [apiAuthMiddleware],
    handlers: {
      POST: async ({ context, request }) => {
        try {
          const { user } = context.session
          const body = await request.json()
          const data = checkoutSchema.parse(body)

          const DEPOSIT_AMOUNT = 500000 // 5000 元 = 500000 分
          const CURRENCY = "CNY"

          const adapter = await getPaymentAdapter(data.provider as PaymentProvider)

          if (!adapter.capabilities.oneTime) {
            return Resp.error(`${data.provider} 不支持一次性支付`, 400)
          }

          const serviceNames = {
            miniprogram: "小程序开发",
            h5: "H5 开发",
            app: "App 开发",
            pc: "PC 网站开发",
            consulting: "技术咨询服务",
          }

          const orderService = new OrderService()
          const order = await orderService.createOrder({
            userId: user.id,
            orderType: "deposit",
            productId: `deposit-${data.serviceType}`,
            productName: `${serviceNames[data.serviceType]}定金`,
            amount: DEPOSIT_AMOUNT,
            currency: CURRENCY,
            metadata: {
              serviceType: data.serviceType,
              contactName: data.contactName,
              contactPhone: data.contactPhone,
              requirements: data.requirements || "",
            },
          })

          const result = await adapter.createCheckout({
            type: "one_time",
            orderId: order.id,
            planId: `deposit-${data.serviceType}`,
            priceId: `deposit-${data.serviceType}`,
            email: user.email,
            userId: user.id,
            successUrl: data.successUrl || `${process.env.VITE_APP_URL}/deposit/success?orderId=${order.id}`,
            cancelUrl: data.cancelUrl || `${process.env.VITE_APP_URL}/`,
            metadata: order.metadata,
          })

          logger.info(`Deposit checkout created: ${adapter.name} - ${result.sessionId} for order ${order.id}`)

          return Resp.success({
            provider: adapter.name,
            orderId: order.id,
            ...result,
          })
        } catch (error) {
          if (error instanceof z.ZodError) {
            return Resp.error(`Invalid data: ${error.issues.map((i) => i.message).join(", ")}`, 400)
          }
          logger.error("Error creating deposit checkout:", error)
          const message = error instanceof Error ? error.message : "Unknown error"
          return Resp.error(`Failed to create checkout: ${message}`, 500)
        }
      },
    },
  },
})
