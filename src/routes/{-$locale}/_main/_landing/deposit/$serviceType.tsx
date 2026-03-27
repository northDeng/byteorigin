import { createFileRoute, useNavigate } from "@tanstack/react-router"
import { useState } from "react"
import {
  Smartphone,
  Globe,
  AppWindow,
  Monitor,
  MessageSquare,
  ChevronLeft,
  CreditCard,
  AlertCircle,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card"
import { Button } from "@/shared/components/ui/button"
import { Badge } from "@/shared/components/ui/badge"
import { Input } from "@/shared/components/ui/input"
import { Textarea } from "@/shared/components/ui/textarea"
import { Label } from "@/shared/components/ui/label"
import { cn } from "@/shared/lib/utils"
import { LocalizedLink } from "@/shared/components/locale/localized-link"

export const Route = createFileRoute(
  "/{-$locale}/_main/_landing/deposit/$serviceType",
)({
  component: ServiceDetailPage,
})

type ServiceOption = {
  key: string
  label: string
  choices: { value: string; label: string }[]
}

type ServiceConfig = {
  id: string
  icon: React.ElementType
  title: string
  subtitle: string
  description: string
  features: string[]
  deposit: number
  iconColor: string
  iconBg: string
  options: ServiceOption[]
}

const serviceConfigs: Record<string, ServiceConfig> = {
  miniprogram: {
    id: "miniprogram",
    icon: Smartphone,
    title: "小程序开发",
    subtitle: "微信 / 支付宝 / 抖音",
    description:
      "覆盖主流平台小程序开发，完整的用户体系、支付、消息推送等核心功能，一次开发多端上线。支持微信、支付宝、抖音等主流平台，帮助企业快速触达移动端用户。",
    features: ["跨平台发布", "用户体系", "在线支付", "消息推送", "数据统计"],
    deposit: 2000,
    iconColor: "text-green-600",
    iconBg: "bg-green-100",
    options: [
      {
        key: "modules",
        label: "功能模块",
        choices: [
          { value: "basic", label: "基础（用户系统）" },
          { value: "payment", label: "含支付" },
          { value: "map", label: "含地图" },
          { value: "push", label: "含消息推送" },
        ],
      },
      {
        key: "pages",
        label: "页面数量",
        choices: [
          { value: "5", label: "5 页以内" },
          { value: "10", label: "10 页以内" },
          { value: "20", label: "20 页以上" },
        ],
      },
      {
        key: "admin",
        label: "后台管理",
        choices: [
          { value: "no", label: "不需要" },
          { value: "yes", label: "需要后台管理系统" },
        ],
      },
    ],
  },
  h5: {
    id: "h5",
    icon: Globe,
    title: "H5 开发",
    subtitle: "移动端网页应用",
    description:
      "高性能移动端 H5 页面，营销活动、电商购物、表单收集，兼容各主流浏览器与微信内嵌场景。快速上线，无需下载安装，分享传播便捷。",
    features: ["微信内嵌", "多端兼容", "快速分享", "数据埋点", "动画特效"],
    deposit: 2000,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
    options: [
      {
        key: "type",
        label: "页面类型",
        choices: [
          { value: "marketing", label: "营销页" },
          { value: "activity", label: "活动页" },
          { value: "ecommerce", label: "电商" },
        ],
      },
      {
        key: "adapt",
        label: "屏幕适配",
        choices: [
          { value: "mobile", label: "仅手机端" },
          { value: "multi", label: "多端适配" },
        ],
      },
      {
        key: "animation",
        label: "动画效果",
        choices: [
          { value: "no", label: "不需要" },
          { value: "yes", label: "需要动画效果" },
        ],
      },
    ],
  },
  app: {
    id: "app",
    icon: AppWindow,
    title: "App 开发",
    subtitle: "iOS & Android 原生/混合",
    description:
      "原生或 React Native 跨端 App 开发，完整的发布上架流程支持，覆盖 App Store 和应用宝等主流渠道。提供完整的 UI 设计与开发一体化服务。",
    features: ["iOS 上架", "Android 上架", "UI 设计", "接口对接", "版本维护"],
    deposit: 5000,
    iconColor: "text-purple-600",
    iconBg: "bg-purple-100",
    options: [
      {
        key: "platform",
        label: "目标平台",
        choices: [
          { value: "ios", label: "仅 iOS" },
          { value: "android", label: "仅 Android" },
          { value: "both", label: "iOS + Android 双端" },
        ],
      },
      {
        key: "complexity",
        label: "功能复杂度",
        choices: [
          { value: "basic", label: "基础版" },
          { value: "standard", label: "标准版" },
          { value: "complex", label: "复杂功能" },
        ],
      },
      {
        key: "admin",
        label: "后台管理",
        choices: [
          { value: "no", label: "不需要" },
          { value: "yes", label: "需要后台" },
        ],
      },
    ],
  },
  pc: {
    id: "pc",
    icon: Monitor,
    title: "PC 网站开发",
    subtitle: "企业官网 / 后台系统",
    description:
      "企业官网、电商平台、管理后台全覆盖，SEO 友好，响应式设计，支持 CMS 内容管理系统集成。助力企业建立专业的线上品牌形象。",
    features: ["SEO 优化", "响应式设计", "CMS 集成", "多语言", "高性能"],
    deposit: 2000,
    iconColor: "text-orange-600",
    iconBg: "bg-orange-100",
    options: [
      {
        key: "type",
        label: "网站类型",
        choices: [
          { value: "corporate", label: "企业官网" },
          { value: "ecommerce", label: "电商平台" },
          { value: "admin", label: "后台系统" },
        ],
      },
      {
        key: "pages",
        label: "页面数量",
        choices: [
          { value: "5", label: "5 页以内" },
          { value: "10", label: "10 页以内" },
          { value: "20", label: "20 页以上" },
        ],
      },
      {
        key: "cms",
        label: "内容管理",
        choices: [
          { value: "no", label: "不需要 CMS" },
          { value: "yes", label: "需要 CMS" },
        ],
      },
    ],
  },
  consulting: {
    id: "consulting",
    icon: MessageSquare,
    title: "技术咨询",
    subtitle: "架构设计 / 技术选型",
    description:
      "资深架构师一对一咨询，覆盖技术选型、系统架构、代码评审、团队培训等，助力项目降本增效。10 年以上行业经验，帮助您少走弯路。",
    features: ["一对一服务", "专业报告", "录音回放", "后续跟进", "方案落地"],
    deposit: 500,
    iconColor: "text-rose-600",
    iconBg: "bg-rose-100",
    options: [
      {
        key: "type",
        label: "咨询类型",
        choices: [
          { value: "architecture", label: "架构设计" },
          { value: "tech-selection", label: "技术选型" },
          { value: "code-review", label: "代码审查" },
          { value: "training", label: "团队培训" },
        ],
      },
      {
        key: "duration",
        label: "咨询时长",
        choices: [
          { value: "1h", label: "1 小时" },
          { value: "half-day", label: "半天" },
          { value: "full-day", label: "全天" },
        ],
      },
    ],
  },
}

function ServiceDetailPage() {
  const { serviceType } = Route.useParams()
  const navigate = useNavigate()

  const service = serviceConfigs[serviceType]

  const [selections, setSelections] = useState<Record<string, string>>(() => {
    if (!service) return {}
    return Object.fromEntries(service.options.map((o) => [o.key, o.choices[0].value]))
  })
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [requirement, setRequirement] = useState("")
  const [payMethod, setPayMethod] = useState<"wechat" | "alipay">("wechat")
  const [submitting, setSubmitting] = useState(false)

  if (!service) {
    return (
      <div className="container max-w-2xl py-20 text-center">
        <p className="text-muted-foreground">未找到该服务类型</p>
        <LocalizedLink to="/deposit">
          <Button className="mt-4" variant="outline">
            <ChevronLeft className="size-4 mr-1" />
            返回列表
          </Button>
        </LocalizedLink>
      </div>
    )
  }

  const Icon = service.icon

  async function handlePay() {
    if (!name.trim() || !phone.trim()) return
    setSubmitting(true)
    try {
      const res = await fetch("/api/payment/deposit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceType,
          selections,
          name,
          phone,
          requirement,
          payMethod,
          amount: service.deposit,
        }),
      })
      const data = await res.json()
      if (payMethod === "wechat" && data?.mweb_url) {
        window.location.href = data.mweb_url
      } else if (payMethod === "alipay" && data?.pay_url) {
        window.location.href = data.pay_url
      } else {
        navigate({ to: "/deposit/success" })
      }
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-3xl mx-auto px-4 py-8 md:py-12">
        {/* Back */}
        <LocalizedLink
          to="/deposit"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ChevronLeft className="size-4 mr-1" />
          返回服务列表
        </LocalizedLink>

        {/* Header */}
        <div className="flex items-start gap-4 mb-8">
          <div className={cn("p-3 rounded-xl", service.iconBg)}>
            <Icon className={cn("size-8", service.iconColor)} />
          </div>
          <div>
            <h1 className="text-2xl font-bold">{service.title}</h1>
            <p className="text-muted-foreground">{service.subtitle}</p>
          </div>
        </div>

        <div className="grid gap-6">
          {/* Service intro */}
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {service.features.map((f) => (
                  <Badge key={f} variant="secondary">{f}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Options */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">配置选项</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              {service.options.map((option) => (
                <div key={option.key}>
                  <Label className="text-sm font-medium mb-2 block">{option.label}</Label>
                  <div className="flex flex-wrap gap-2">
                    {option.choices.map((choice) => (
                      <button
                        key={choice.value}
                        type="button"
                        onClick={() =>
                          setSelections((prev) => ({ ...prev, [option.key]: choice.value }))
                        }
                        className={cn(
                          "px-3 py-1.5 rounded-md border text-sm transition-all",
                          selections[option.key] === choice.value
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border hover:border-primary/50 bg-background",
                        )}
                      >
                        {choice.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">联系信息</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name">姓名 *</Label>
                  <Input
                    id="name"
                    placeholder="请输入您的姓名"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phone">手机号 *</Label>
                  <Input
                    id="phone"
                    placeholder="请输入手机号"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="requirement">需求描述</Label>
                <Textarea
                  id="requirement"
                  placeholder="请简要描述您的项目需求、功能点、上线时间等..."
                  rows={4}
                  value={requirement}
                  onChange={(e) => setRequirement(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Payment */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">支付方式</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setPayMethod("wechat")}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border text-sm font-medium transition-all",
                    payMethod === "wechat"
                      ? "border-green-500 bg-green-50 text-green-700"
                      : "border-border hover:border-green-300",
                  )}
                >
                  <span className="text-lg">💚</span>
                  微信支付
                </button>
                <button
                  type="button"
                  onClick={() => setPayMethod("alipay")}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border text-sm font-medium transition-all",
                    payMethod === "alipay"
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-border hover:border-blue-300",
                  )}
                >
                  <span className="text-lg">💙</span>
                  支付宝
                </button>
              </div>

              {payMethod === "wechat" && (
                <div className="flex items-start gap-2 p-3 rounded-lg bg-amber-50 border border-amber-200">
                  <AlertCircle className="size-4 text-amber-600 mt-0.5 shrink-0" />
                  <p className="text-xs text-amber-700">
                    微信 H5 支付需在手机浏览器中打开，不支持在微信内直接唤起。如在微信中浏览，请点击右上角菜单选择「在浏览器中打开」。
                  </p>
                </div>
              )}

              <div className="flex items-center justify-between py-3 border-t">
                <div>
                  <p className="text-sm text-muted-foreground">定金金额</p>
                  <p className="text-2xl font-bold text-primary">
                    ¥{service.deposit.toLocaleString()}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    签订合同后抵扣尾款，协商不成全额退还
                  </p>
                </div>
                <Button
                  size="lg"
                  className="gap-2"
                  disabled={submitting || !name.trim() || !phone.trim()}
                  onClick={handlePay}
                >
                  <CreditCard className="size-4" />
                  {submitting ? "处理中..." : "立即支付定金"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
