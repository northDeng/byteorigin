import { useIntlayer } from "react-intlayer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card"
import { Button } from "@/shared/components/ui/button"
import { LocalizedLink } from "@/shared/components/locale/localized-link"
import { Globe, Lightbulb, Monitor, Smartphone, Tablet } from "lucide-react"
import { cn } from "@/shared/lib/utils"
import { useGlobalContext } from "@/shared/context/global.context"
import { useLocalizedNavigate } from "@/shared/hooks/use-localized-navigate"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Smartphone,
  Globe,
  Tablet,
  Monitor,
  Lightbulb,
}

const gradients = [
  "from-blue-500/10 to-cyan-500/10",
  "from-purple-500/10 to-pink-500/10",
  "from-orange-500/10 to-amber-500/10",
  "from-green-500/10 to-emerald-500/10",
  "from-indigo-500/10 to-violet-500/10",
]

const iconColors = [
  "text-blue-500",
  "text-purple-500",
  "text-orange-500",
  "text-green-500",
  "text-indigo-500",
]

export function Services() {
  const landing = useIntlayer("landing")
  const { services } = landing
  const { userInfo } = useGlobalContext()
  const navigate = useLocalizedNavigate()

  if (!services.display) return null

  const handlePayClick = (e: React.MouseEvent) => {
    if (!userInfo?.user) {
      e.preventDefault()
      navigate("/login")
    }
  }

  return (
    <section id="services" className="container py-24 m-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">{services.title.value}</h2>
        <p className="text-muted-foreground text-lg">{services.description.value}</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.items.map((service, index) => {
          const Icon = iconMap[service.icon as string]
          return (
            <Card key={index} className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="pb-2">
                <div className={cn(
                  "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br",
                  gradients[index % gradients.length]
                )}>
                  {Icon && <Icon className={cn("h-8 w-8", iconColors[index % iconColors.length])} />}
                </div>
                <CardTitle className="text-xl">{service.title.value}</CardTitle>
                <CardDescription className="text-sm">{service.description.value}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-4">
                  ¥{service.depositAmount} <span className="text-sm font-normal text-muted-foreground">定金</span>
                </p>
                <LocalizedLink to="/deposit" onClick={handlePayClick}>
                  <Button className="w-full">立即支付</Button>
                </LocalizedLink>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
