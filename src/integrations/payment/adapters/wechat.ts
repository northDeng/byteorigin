import type {
  PaymentAdapter,
  AdapterCapabilities,
  CreateCheckoutParams,
  CheckoutResult,
  WebhookEvent,
} from "../types"

export class WechatAdapter implements PaymentAdapter {
  readonly name = "wechat" as const
  readonly capabilities: AdapterCapabilities = {
    subscription: false,
    oneTime: true,
    customerPortal: false,
    refund: true,
  }

  async createCheckout(params: CreateCheckoutParams): Promise<CheckoutResult> {
    // TODO: 实现微信支付统一下单
    // 需要配置: appId, mchId, apiKey, certPath
    throw new Error("WeChat Pay not configured. Please add merchant credentials.")
  }

  async handleWebhook(request: Request): Promise<WebhookEvent> {
    // TODO: 实现微信支付回调验证
    throw new Error("WeChat Pay webhook not implemented")
  }
}
