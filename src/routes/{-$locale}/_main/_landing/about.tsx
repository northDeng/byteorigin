import { createFileRoute } from "@tanstack/react-router"
import { Award, Shield, Zap, Code, Users, Target } from "lucide-react"
import { Card, CardContent } from "@/shared/components/ui/card"
import { cn } from "@/shared/lib/utils"

export const Route = createFileRoute("/{-$locale}/_main/_landing/about")({
  component: AboutPage,
})

const strengths = [
  {
    icon: Award,
    title: "10年+行业经验",
    description: "深耕软件开发领域，积累丰富的项目经验和技术沉淀",
  },
  {
    icon: Users,
    title: "500+企业客户",
    description: "服务覆盖教育、电商、金融、医疗等多个行业",
  },
  {
    icon: Zap,
    title: "快速交付",
    description: "敏捷开发流程，交付速度比行业平均快 30%",
  },
  {
    icon: Shield,
    title: "质量保障",
    description: "全面测试覆盖，提供 1 年免费维护服务",
  },
  {
    icon: Code,
    title: "全栈能力",
    description: "小程序、H5、App、PC 网站全平台开发能力",
  },
  {
    icon: Target,
    title: "定制化服务",
    description: "深入理解业务需求，提供量身定制的技术方案",
  },
]

function AboutPage() {
  return (
    <div className="container max-w-4xl py-16 m-auto">
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4">关于我们</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          长沙涛澜启飞科技有限公司是一家专注于软件开发外包服务的技术公司，致力于为企业提供高质量、高效率的数字化解决方案。
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">公司简介</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            我们拥有一支经验丰富的技术团队，核心成员均来自一线互联网公司，在移动端开发、Web
            应用、企业级系统等领域有着深厚的技术积累。
          </p>
          <p>
            公司秉承"技术驱动、品质为先"的服务理念，采用敏捷开发模式，确保项目高效推进的同时保证交付质量。从需求分析、架构设计到开发测试、上线运维，我们提供全流程的技术服务。
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">核心优势</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((item) => (
            <Card key={item.title}>
              <CardContent className="pt-6">
                <div
                  className={cn(
                    "size-12 rounded-lg flex items-center justify-center mb-4",
                    "bg-primary/10 text-primary"
                  )}
                >
                  <item.icon className="size-6" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">服务流程</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {["需求沟通", "方案设计", "开发测试", "交付运维"].map((step, index) => (
            <div key={step} className="text-center p-4">
              <div
                className={cn(
                  "size-10 rounded-full flex items-center justify-center mx-auto mb-3",
                  "bg-primary text-primary-foreground font-bold"
                )}
              >
                {index + 1}
              </div>
              <p className="font-medium">{step}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
