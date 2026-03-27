import { createFileRoute } from "@tanstack/react-router"
import {
  Smartphone,
  Globe,
  AppWindow,
  Monitor,
  MessageSquare,
  ChevronRight,
  Star,
  Clock,
  Shield,
} from "lucide-react"
import { Card, CardContent } from "@/shared/components/ui/card"
import { Button } from "@/shared/components/ui/button"
import { Badge } from "@/shared/components/ui/badge"
import { cn } from "@/shared/lib/utils"
import { LocalizedLink } from "@/shared/components/locale/localized-link"

export const Route = createFileRoute("/{-$locale}/_main/_landing/deposit/")(
  {
    component: DepositPage,
  },
)

const services = [
  {
    id: "miniprogram",
    icon: Smartphone,
    title: "小程序开发",
    subtitle: "微信 / 支付宝 / 抖音",
    description:
      "覆盖主流平台小程序开发，完整的用户体系、支付、消息推送等核心功能，一次开发多端上线。",
    tags: ["微信小程序", "支付宝小程序", "跨平台"],
    deposit: 2000,
    popular: true,
    color: "from-green-500/10 to-emerald-500/10",
    iconColor: "text-green-600",
    iconBg: "bg-green-100",
  },
  {
    id: "h5",
    icon: Globe,
    title: "H5 开发",
    subtitle: "移动端网页应用",
    description:
      "高性能移动端 H5 页面，营销活动、电商购物、表单收集，兼容各主流浏览器与微信内嵌场景。",
    tags: ["营销页面", "活动运营", "电商场景"],
    deposit: 2000,
    popular: false,
    color: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
  },
  {
    id: "app",
    icon: AppWindow,
    title: "App 开发",
    subtitle: "iOS & Android 原生/混合",
    description:
      "原生或 React Native 跨端 App 开发，完整的发布上架流程支持，覆盖 App Store 和应用宝等主流渠道。",
    tags: ["iOS", "Android", "跨端开发"],
    deposit: 5000,
    popular: false,
    color: "from-purple-500/10 to-violet-500/10",
    iconColor: "text-purple-600",
    iconBg: "bg-purple-100",
  },
  {
    id: "pc",
    icon: Monitor,
    title: "PC 网站开发",
    subtitle: "企业官网 / 后台系统",
    description:
      "企业官网、电商平台、管理后台全覆盖，SEO 友好，响应式设计，支持 CMS 内容管理系统集成。",
    tags: ["企业官网", "后台系统", "电商平台"],
    deposit: 2000,
    popular: false,
    color: "from-orange-500/10 to-amber-500/10",
    iconColor: "text-orange-600",
    iconBg: "bg-orange-100",
  },
  {
    id: "consulting",
    icon: MessageSquare,
    title: "技术咨询",
    subtitle: "架构设计 / 技术选型",
    description:
      "资深架构师一对一咨询，覆盖技术选型、系统架构、代码评审、团队培训等，助力项目降本增效。",
    tags: ["架构设计", "代码评审", "团队培训"],
    deposit: 500,
    popular: false,
    color: "from-rose-500/10 to-pink-500/10",
    iconColor: "text-rose-600",
    iconBg: "bg-rose-100",
  },
]

const highlights = [
  { icon: Star, text: "500+ 企业客户" },
  { icon: Clock, text: "10 年行业经验" },
  { icon: Shield, text: "1 年免费维护" },
]

function DepositPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero */}
      <div className="container max-w-5xl mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-10">
          <Badge variant="secondary" className="mb-4">
            支付定金 · 锁定档期
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            选择您需要的服务
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            支付定金即锁定项目档期，24 小时内专属顾问联系您进行需求沟通
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {highlights.map((h) => (
              <div
                key={h.text}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <h.icon className="size-4 text-primary" />
                <span>{h.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <LocalizedLink
                key={service.id}
                to="/deposit/$serviceType"
                params={{ serviceType: service.id }}
                className="block group"
              >
                <Card
                  className={cn(
                    "h-full border transition-all duration-200",
                    "hover:shadow-lg hover:-translate-y-0.5 cursor-pointer",
                    service.popular && "ring-2 ring-primary",
                  )}
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Popular badge */}
                    {service.popular && (
                      <div className="flex justify-end mb-2">
                        <Badge className="text-xs">最受欢迎</Badge>
                      </div>
                    )}
                    {!service.popular && <div className="mb-6" />}

                    {/* Icon */}
                    <div
                      className={cn(
                        "size-14 rounded-2xl flex items-center justify-center mb-4",
                        `bg-gradient-to-br ${service.color}`,
                        service.iconBg,
                      )}
                    >
                      <Icon
                        className={cn("size-7", service.iconColor)}
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Text */}
                    <h3 className="text-lg font-semibold mb-1">
                      {service.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-3">
                      {service.subtitle}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {service.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {service.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs font-normal"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Price + CTA */}
                    <div className="flex items-center justify-between mt-5 pt-4 border-t">
                      <div>
                        <span className="text-xs text-muted-foreground">
                          定金起
                        </span>
                        <p className="text-xl font-bold text-primary">
                          ¥{service.deposit.toLocaleString()}
                        </p>
                      </div>
                      <Button
                        size="sm"
                        className="gap-1 group-hover:gap-2 transition-all"
                      >
                        查看详情
                        <ChevronRight className="size-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </LocalizedLink>
            )
          })}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          定金在合同签订后抵扣项目尾款。如协商不成，定金全额退还。
        </p>
      </div>
    </div>
  )
}
