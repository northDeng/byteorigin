import type {
  PaymentAdapter,
  AdapterCapabilities,
  CreateCheckoutParams,
  CheckoutResult,
  WebhookEvent,
} from "../types"

export class AlipayAdapter implements PaymentAdapter {
  readonly name = "alipay" as const
  readonly capabilities: AdapterCapabilities = {
    subscription: false,
    oneTime: true,
    customerPortal: false,
    refund: true,
  }

  async createCheckout(params: CreateCheckoutParams): Promise<CheckoutResult> {
    // TODO: 实现支付宝网页支付
    // 需要配置: appId, privateKey, alipayPublicKey
    throw new Error("Alipay not configured. Please add merchant credentials.")
  }

  async handleWebhook(request: Request): Promise<WebhookEvent> {
    // TODO: 实现支付宝回调验证
    throw new Error("Alipay webhook not implemented")
  }
}
