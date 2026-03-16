import { createFileRoute } from "@tanstack/react-router"
import { Mail, MapPin, Phone, Clock } from "lucide-react"
import { Card, CardContent } from "@/shared/components/ui/card"
import { cn } from "@/shared/lib/utils"

export const Route = createFileRoute("/{-$locale}/_main/_landing/contact")({
  component: ContactPage,
})

const contactItems = [
  {
    icon: Phone,
    label: "联系电话",
    value: "16680452709",
    description: "工作日 9:00-18:00",
  },
  {
    icon: Mail,
    label: "电子邮箱",
    value: "support@skyapi.top",
    description: "我们会在 24 小时内回复",
  },
  {
    icon: MapPin,
    label: "公司地址",
    value: "湖南省长沙市",
    description: "欢迎来访洽谈",
  },
  {
    icon: Clock,
    label: "工作时间",
    value: "周一至周五 9:00-18:00",
    description: "法定节假日除外",
  },
]

function ContactPage() {
  return (
    <div className="container max-w-4xl py-16 m-auto">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">联系我们</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          无论您有任何软件开发需求或技术咨询，欢迎随时与我们取得联系。
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contactItems.map((item) => (
          <Card key={item.label}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div
                  className={cn(
                    "size-12 rounded-lg flex items-center justify-center shrink-0",
                    "bg-primary/10 text-primary"
                  )}
                >
                  <item.icon className="size-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-semibold text-lg">{item.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="mt-12 text-center p-8 rounded-lg bg-muted/50">
        <h2 className="text-xl font-bold mb-2">准备开始您的项目？</h2>
        <p className="text-muted-foreground">
          支付 5000 元定金即可锁定项目档期，我们将在收到定金后 48 小时内与您取得联系。
        </p>
      </section>
    </div>
  )
}
