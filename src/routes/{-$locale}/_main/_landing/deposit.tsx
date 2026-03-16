import { createFileRoute } from "@tanstack/react-router"
import { useState } from "react"
import { toast } from "sonner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card"
import { Button } from "@/shared/components/ui/button"
import { Input } from "@/shared/components/ui/input"
import { Label } from "@/shared/components/ui/label"
import { Textarea } from "@/shared/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/shared/components/ui/radio-group"

export const Route = createFileRoute("/{-$locale}/_main/_landing/deposit")({
  component: DepositPage,
})

function DepositPage() {
  const [serviceType, setServiceType] = useState("")
  const [provider, setProvider] = useState<"wechat" | "alipay">("wechat")
  const [contactName, setContactName] = useState("")
  const [contactPhone, setContactPhone] = useState("")
  const [requirements, setRequirements] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api/payment/deposit-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceType,
          provider,
          contactName,
          contactPhone,
          requirements,
        }),
      })

      const data = await response.json()
      if (data.success) {
        window.location.href = data.data.checkoutUrl
      } else {
        toast.error(data.message || "支付创建失败")
      }
    } catch (error) {
      toast.error("网络错误，请稍后重试")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container max-w-2xl py-12 m-auto">
      <Card>
        <CardHeader>
          <CardTitle>支付定金</CardTitle>
          <CardDescription>支付 5000 元定金锁定项目档期</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label className="mb-2">选择服务类型</Label>
              <RadioGroup value={serviceType} onValueChange={setServiceType}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="miniprogram" id="miniprogram" />
                  <Label htmlFor="miniprogram">小程序开发</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="h5" id="h5" />
                  <Label htmlFor="h5">H5 开发</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="app" id="app" />
                  <Label htmlFor="app">App 开发</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pc" id="pc" />
                  <Label htmlFor="pc">PC 网站开发</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="consulting" id="consulting" />
                  <Label htmlFor="consulting">技术咨询服务</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label className="mb-2" htmlFor="contactName">联系人姓名</Label>
              <Input
                id="contactName"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                required
              />
            </div>

            <div>
              <Label className="mb-2" htmlFor="contactPhone">联系电话</Label>
              <Input
                id="contactPhone"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                required
              />
            </div>

            <div>
              <Label className="mb-2" htmlFor="requirements">需求描述（可选）</Label>
              <Textarea
                id="requirements"
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                rows={4}
              />
            </div>

            <div>
              <Label className="mb-2">支付方式</Label>
              <RadioGroup value={provider} onValueChange={(v) => setProvider(v as "wechat" | "alipay")}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="wechat" id="wechat" />
                  <Label htmlFor="wechat">微信支付</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="alipay" id="alipay" />
                  <Label htmlFor="alipay">支付宝</Label>
                </div>
              </RadioGroup>
            </div>

            <Button type="submit" className="w-full" disabled={loading || !serviceType}>
              {loading ? "处理中..." : "支付 ¥5000"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
