import { createFileRoute } from "@tanstack/react-router"
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card"
import { CheckCircle } from "lucide-react"
import { LocalizedLink } from "@/shared/components/locale/localized-link"
import { Button } from "@/shared/components/ui/button"

export const Route = createFileRoute("/{-$locale}/_main/_landing/deposit/success")({
  component: SuccessPage,
})

function SuccessPage() {
  return (
    <div className="container max-w-2xl py-12">
      <Card>
        <CardHeader className="text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <CardTitle>支付成功</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            感谢您的信任！我们的团队将在 24 小时内与您联系，开始需求沟通。
          </p>
          <p className="text-sm text-muted-foreground">
            请保持电话畅通，我们会尽快与您取得联系。
          </p>
          <LocalizedLink to="/">
            <Button>返回首页</Button>
          </LocalizedLink>
        </CardContent>
      </Card>
    </div>
  )
}
