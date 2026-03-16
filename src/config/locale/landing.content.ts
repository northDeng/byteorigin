import { type Dictionary, t } from "intlayer"
import { siteConfig } from "@/config/site-config"

const { github } = siteConfig.social

/**
 * Landing Page Configuration
 *
 * Modify this file to customize the landing page content.
 * Use `t({ en: "English", "zh": "中文" })` for i18n text.
 */
export default {
  key: "landing",
  content: {
    banner: {
      display: false,
      text: t({
        en: "Open Sourced in 2026: Production-grade AI SaaS template available! Join our developer ecosystem today.",
        zh: "2026 年开源：生产级 AI SaaS 模板现已发布！立即加入我们的开发者生态系统。",
      }),
      button: {
        text: t({ en: "View on GitHub", zh: "在 GitHub 上查看" }),
        href: github,
      },
    },
    hero: {
      title: t({
        en: "Professional Software Development Services",
        zh: "专业软件开发服务",
      }),
      description: t({
        en: "Mini Programs, H5, Apps, PC Websites - One-stop software outsourcing solutions",
        zh: "小程序、H5、App、PC 网站 - 一站式软件外包解决方案",
      }),
      announcement: {
        show: false,
        text: t({
          en: "Open Sourced in 2026: Production-grade AI SaaS template available!",
          zh: "2026 年开源：生产级 AI SaaS 模板现已发布！",
        }),
        href: github,
      },
      buttons: {
        start: {
          text: t({ en: "Pay Deposit", zh: "支付定金" }),
          url: "/deposit",
        },
        docs: {
          text: t({ en: "Contact Us", zh: "联系我们" }),
          url: "/contact",
        },
      },
      image: {
        enabled: false as const,
        src: "/landing/hero/home.png",
        width: 2700,
        height: 1440,
      },
    },
    powerBy: {
      display: false,
      title: t({ en: "Trusted by developers worldwide", zh: "被全球开发者信任" }),
      items: [
        "tanstack-start",
        "github",
        "tailwindcss",
        "vercel",
        "shadcn",
        "openai",
        "react",
        "supabase",
        "cloudflare",
      ],
    },
    threeBenefits: {
      display: true,
      title: t({ en: "Why Choose Us", zh: "为什么选择我们" }),
      description: t({
        en: "Professional team, quality assurance, fast delivery",
        zh: "专业团队，质量保障，快速交付",
      }),
      items: [
        {
          title: t({ en: "10+ Years Experience", zh: "10年+行业经验" }),
          description: t({
            en: "Served 500+ enterprises with proven track record",
            zh: "服务 500+ 企业客户，经验丰富",
          }),
          icon: "Award",
        },
        {
          title: t({ en: "Fast Delivery", zh: "快速交付" }),
          description: t({
            en: "Agile development, 30% faster than industry average",
            zh: "敏捷开发，交付速度比行业平均快 30%",
          }),
          icon: "Zap",
        },
        {
          title: t({ en: "Quality Assurance", zh: "质量保障" }),
          description: t({
            en: "Comprehensive testing, 1-year free maintenance",
            zh: "全面测试，1 年免费维护",
          }),
          icon: "Shield",
        },
      ],
    },
    services: {
      display: true,
      title: t({ en: "Our Services", zh: "服务项目" }),
      description: t({
        en: "Professional development services for all platforms",
        zh: "全平台专业开发服务",
      }),
      items: [
        {
          id: "miniprogram",
          title: t({ en: "Mini Program Development", zh: "小程序开发" }),
          description: t({
            en: "WeChat, Alipay, Douyin mini programs",
            zh: "微信、支付宝、抖音小程序开发",
          }),
          icon: "Smartphone",
          depositAmount: 5000,
        },
        {
          id: "h5",
          title: t({ en: "H5 Development", zh: "H5 开发" }),
          description: t({
            en: "Responsive mobile web applications",
            zh: "响应式移动网页应用",
          }),
          icon: "Globe",
          depositAmount: 5000,
        },
        {
          id: "app",
          title: t({ en: "App Development", zh: "App 开发" }),
          description: t({
            en: "iOS and Android native applications",
            zh: "iOS 和 Android 原生应用",
          }),
          icon: "Tablet",
          depositAmount: 5000,
        },
        {
          id: "pc",
          title: t({ en: "PC Website Development", zh: "PC 网站开发" }),
          description: t({
            en: "Enterprise websites and management systems",
            zh: "企业官网和管理系统",
          }),
          icon: "Monitor",
          depositAmount: 5000,
        },
        {
          id: "consulting",
          title: t({ en: "Technical Consulting", zh: "技术咨询服务" }),
          description: t({
            en: "Architecture design and technical solutions",
            zh: "架构设计和技术方案咨询",
          }),
          icon: "Lightbulb",
          depositAmount: 5000,
        },
      ],
    },
    introduction: {
      display: true,
      items: [
        {
          type: "image" as const,
          title: t({ en: "AI Model System", zh: "AI 模型系统" }),
          description: t({
            en: "Integrate multiple AI providers (10+), support 100+ models, support model selection, conversation management, and multi-provider support",
            zh: "集成多家 AI 服务商（10+）,支持 100+ 模型, 支持模型选择、会话管理和多服务商支持",
          }),
          image: "/landing/introduction/ai-chat.webp" as const,
          imagePosition: "left" as const,
          features: [
            {
              title: t({ en: "Multi-Provider Support", zh: "多服务商支持" }),
              description: t({
                en: "Support multiple model selection, conversation management, and multi-provider support",
                zh: "支持多模型选择（OpenAI、Anthropic、Google、DeepSeek、Groq、Mistral 等）、会话管理和多服务商支持",
              }),
            },
            {
              title: t({ en: "Model Selection", zh: "模型选择" }),
              description: t({
                en: "Backend dynamic configuration system, unified management of API Keys for multiple providers",
                zh: "后台动态配置系统，统一管理 API Key 配置",
              }),
            },
          ],
        },
        {
          type: "image" as const,
          title: t({ en: "Zero-Config Authentication", zh: "零配置认证系统" }),
          description: t({
            en: "Built on Better Auth with one-click social login, magic links, and role-based access control. Just configure your OAuth credentials in the admin panel — no code changes needed.",
            zh: "基于 Better Auth 构建，支持社交登录、魔法链接和基于角色的访问控制。只需在后台配置 OAuth 凭证，无需修改代码即可启用。",
          }),
          image: "/landing/introduction/auth.webp" as const,
          imagePosition: "left" as const,
          features: [
            {
              title: t({ en: "One-Click Social Login", zh: "一键社交登录" }),
              description: t({
                en: "Google, GitHub, Apple and more, you can add or modify any provider anytime",
                zh: "Google、GitHub、Apple 等，随时增加修改",
              }),
            },
            {
              title: t({ en: "Magic Link & Password", zh: "魔法链接与密码" }),
              description: t({
                en: "Passwordless login via email or traditional credentials",
                zh: "通过邮件无密码登录或传统账密认证",
              }),
            },
            {
              title: t({ en: "Role-Based Access Control", zh: "角色权限控制" }),
              description: t({
                en: "Built-in admin and user roles with extensible permission system",
                zh: "内置管理员和用户角色，权限系统可扩展",
              }),
            },
          ],
        },
        {
          type: "image" as const,
          title: t({ en: "Global Payment Ready", zh: "全球支付就绪" }),
          description: t({
            en: "Accept payments worldwide with Stripe, Creem, PayPal, WeChat Pay, and Alipay. Subscription and one-time models included — switch providers without touching code.",
            zh: "通过 Stripe、Creem、PayPal、微信支付和支付宝收款，覆盖全球用户。订阅和一次性支付模型开箱即用，切换支付商无需改代码。",
          }),
          image: "/landing/introduction/payment.webp",
          imagePosition: "right" as const,
          features: [
            {
              title: t({ en: "Dual Payment Models", zh: "双支付模式" }),
              description: t({
                en: "Subscription recurring billing and one-time credits, ready out of the box",
                zh: "订阅周期计费与一次性积分充值，即插即用",
              }),
            },
            {
              title: t({ en: "Auto Webhook Handling", zh: "自动事件处理" }),
              description: t({
                en: "Payment success, refunds, and subscription changes handled automatically",
                zh: "支付成功、退款、订阅变更自动同步",
              }),
            },
            {
              title: t({ en: "Credit System Built-in", zh: "内置积分系统" }),
              description: t({
                en: "Monetize AI features with built-in credit consumption and top-up flow",
                zh: "通过积分消耗实现 AI 功能变现，充值流程完整",
              }),
            },
          ],
        },
        {
          type: "image" as const,
          title: t({ en: "Live Configuration Dashboard", zh: "在线配置中心" }),
          description: t({
            en: "Update environment variables, payment keys, and feature flags in real-time through the admin panel. No redeployment, no downtime — changes take effect instantly.",
            zh: "通过后台实时更新环境变量、支付密钥和功能开关。无需重新部署，无需停机——修改即时生效。",
          }),
          image: "/landing/introduction/dynamic-config.webp",
          imagePosition: "left" as const,
          features: [
            {
              title: t({ en: "Visual Config Editor", zh: "可视化配置编辑器" }),
              description: t({
                en: "Edit payment, email, storage, and AI settings from a friendly UI",
                zh: "通过友好界面配置支付、邮件、存储和 AI 设置",
              }),
            },
            {
              title: t({ en: "Zero Downtime Updates", zh: "零停机更新" }),
              description: t({
                en: "Say goodbye to .env files — 90% of configs can be changed live",
                zh: "告别 .env 文件——90% 配置可在线修改",
              }),
            },
            {
              title: t({ en: "Extensible Config Schema", zh: "可扩展配置模式" }),
              description: t({
                en: "Add custom config fields and integrate them into the admin panel",
                zh: "添加自定义配置项，无缝集成到后台系统",
              }),
            },
          ],
        },
        {
          type: "image" as const,
          title: t({ en: "Content & Communication Hub", zh: "内容与沟通中心" }),
          description: t({
            en: "Keep your users informed with built-in blog, visual roadmap, and changelog. Perfect for building trust and transparency with your SaaS audience.",
            zh: "通过内置博客、可视化路线图和更新日志与用户保持沟通。为您的 SaaS 产品建立信任和透明度。",
          }),
          image: "/landing/introduction/blog-roadmap.webp",
          imagePosition: "right" as const,
          features: [
            {
              title: t({ en: "MDX Blog", zh: "MDX 博客" }),
              description: t({
                en: "Write posts with rich components, syntax highlighting, and i18n support",
                zh: "支持富组件、代码高亮和多语言的技术博客",
              }),
            },
            {
              title: t({ en: "Visual Roadmap", zh: "可视化路线图" }),
              description: t({
                en: "Show upcoming features with progress tracking and milestone markers",
                zh: "展示即将推出的功能，支持进度追踪",
              }),
            },
            {
              title: t({ en: "Changelog Timeline", zh: "更新日志时间线" }),
              description: t({
                en: "Announce updates with a beautiful timeline layout",
                zh: "以精美时间线形式发布产品更新",
              }),
            },
          ],
        },
        {
          type: "image" as const,
          title: t({ en: "Developer-First Documentation", zh: "开发者友好的文档系统" }),
          description: t({
            en: "Powered by Fumadocs with full-text search, API references, and multilingual support. Everything you need to onboard developers and support your users.",
            zh: "基于 Fumadocs 构建，支持全文搜索、API 参考和多语言。为开发者提供完整的文档体验。",
          }),
          image: "/landing/introduction/doc.webp",
          imagePosition: "left" as const,
          features: [
            {
              title: t({ en: "Fumadocs Powered", zh: "Fumadocs 驱动" }),
              description: t({
                en: "Structured navigation, MDX components, and code blocks out of the box",
                zh: "开箱即用的结构化导航、MDX 组件和代码块",
              }),
            },
            {
              title: t({ en: "i18n Ready", zh: "多语言就绪" }),
              description: t({
                en: "Parallel content in multiple languages with automatic route switching",
                zh: "多语言内容并行，路由自动切换",
              }),
            },
            {
              title: t({ en: "Search & SEO", zh: "搜索与 SEO" }),
              description: t({
                en: "Built-in search with semantic HTML for optimal discoverability",
                zh: "内置搜索功能，语义化 HTML 提升搜索引擎可见性",
              }),
            },
          ],
        },
      ],
    },
    features: {
      display: true,
      title: t({ en: "Core Features", zh: "核心功能" }),
      description: t({
        en: "Everything you need to boost productivity",
        zh: "提升生产力所需的一切",
      }),
      items: [
        {
          title: t({ en: "Production-grade AI SaaS Template", zh: "生产级 AI SaaS 模板" }),
          description: t({
            en: "Ready-to-use production-grade AI SaaS template with built-in SEO and i18n support",
            zh: "开箱即用的生产级 AI SaaS 模板，内置 SEO 和国际化支持",
          }),
          icon: "Code",
        },
        {
          title: t({ en: "Auth & Payment Integration", zh: "认证与支付集成" }),
          description: t({
            en: "Integrated Google OAuth, passwordless login, and Stripe payment system",
            zh: "集成 Google OAuth、免密登录和 Stripe 支付系统",
          }),
          icon: "Key",
        },
        {
          title: t({ en: "Data Infrastructure", zh: "数据基础设施" }),
          description: t({
            en: "Built-in Supabase integration for reliable and scalable data storage",
            zh: "内置 Supabase 集成，提供可靠且可扩展的数据存储",
          }),
          icon: "Database",
        },
        {
          title: t({ en: "One-Click Deployment", zh: "一键部署" }),
          description: t({
            en: "Automated configuration for seamless deployment to Vercel or Cloudflare",
            zh: "自动化配置，无缝部署到 Vercel 或 Cloudflare",
          }),
          icon: "Cloud",
        },
        {
          title: t({ en: "Business Analytics", zh: "业务分析" }),
          description: t({
            en: "Integrated Google Analytics and Search Console for continuous growth tracking",
            zh: "集成 Google Analytics 和 Search Console，持续追踪增长",
          }),
          icon: "BarChart3",
        },
        {
          title: t({ en: "AI-Ready Architecture", zh: "AI 就绪架构" }),
          description: t({
            en: "Pre-configured AI integrations with built-in credit system and API monetization",
            zh: "预配置 AI 集成，内置积分系统和 API 变现能力",
          }),
          icon: "Bot",
        },
      ],
    },
    pricing: {
      display: false,
    },
    horizontalShowcase: {
      display: false,
      title: t({ en: "Featured Capabilities", zh: "特色能力" }),
      description: t({
        en: "Discover what VibeAny can do for you",
        zh: "探索 VibeAny 能为你做什么",
      }),
      items: [
        {
          title: t({ en: "AI Integration", zh: "AI 集成" }),
          imagePath: t({
            en: "/home/introduction/ai-capabilities.png",
            zh: "/home/introduction/ai-capabilities-zh.png",
          }),
          link: "/",
          description: t({
            en: "Add AI-powered interactions to your website",
            zh: "为你的网站添加 AI 驱动的交互",
          }),
        },
        {
          title: t({ en: "Seamless Authentication", zh: "无缝认证" }),
          imagePath: t({
            en: "/home/introduction/authentication.png",
            zh: "/home/introduction/authentication-zh.png",
          }),
          link: "/",
          description: t({
            en: "One-click login and third-party integrations",
            zh: "一键登录和第三方集成",
          }),
        },
        {
          title: t({ en: "Payment Solutions", zh: "支付方案" }),
          imagePath: "/landing/introduction/payment.png",
          link: "/",
          description: t({
            en: "Flexible subscriptions and one-time payments",
            zh: "灵活的订阅和一次性支付",
          }),
        },
        {
          title: t({ en: "Content Management", zh: "内容管理" }),
          imagePath: t({
            en: "/landing/introduction/blog.png",
            zh: "/landing/introduction/blog-zh.png",
          }),
          link: "/",
          description: t({
            en: "Multilingual blogs and documentation system",
            zh: "多语言博客和文档系统",
          }),
        },
      ],
    },
    userTestimonials: {
      display: true,
      title: t({ en: "What Our Users Say", zh: "用户评价" }),
      testimonials: [
        {
          text: t({
            en: "VibeAny has completely transformed how we build AI applications. The templates are production-ready and save us weeks of development time.",
            zh: "VibeAny 彻底改变了我们构建 AI 应用的方式。模板开箱即用，为我们节省了数周的开发时间。",
          }),
          image: "/avatars/user1.avif",
          name: "Sarah Chen",
          role: t({ en: "CTO, TechStart", zh: "TechStart 首席技术官" }),
        },
        {
          text: t({
            en: "The best AI development platform I've used. Great documentation, amazing support, and powerful features that just work.",
            zh: "我用过的最好的 AI 开发平台。文档完善，支持出色，功能强大且稳定可靠。",
          }),
          image: "/avatars/user2.avif",
          name: "Michael Rodriguez",
          role: t({ en: "Lead Developer", zh: "首席开发者" }),
        },
        {
          text: t({
            en: "From prototype to production in record time. VibeAny's infrastructure and tools are exactly what modern AI projects need.",
            zh: "从原型到生产的速度创下纪录。VibeAny 的基础设施和工具正是现代 AI 项目所需要的。",
          }),
          image: "/avatars/user3.avif",
          name: "Emily Johnson",
          role: t({ en: "Product Manager", zh: "产品经理" }),
        },
        {
          text: t({
            en: "Outstanding platform with excellent performance. The AI integrations are seamless and the developer experience is top-notch.",
            zh: "性能卓越的出色平台。AI 集成无缝衔接，开发者体验一流。",
          }),
          image: "/avatars/user4.avif",
          name: "David Kim",
          role: t({ en: "Senior Engineer", zh: "高级工程师" }),
        },
        {
          text: t({
            en: "Incredible value for money. The lifetime plan paid for itself within the first month of using it for our startup.",
            zh: "性价比极高。终身计划在我们创业公司使用的第一个月就已回本。",
          }),
          image: "/avatars/user5.avif",
          name: "Lisa Zhang",
          role: t({ en: "Founder, AI Startup", zh: "AI 创业公司创始人" }),
        },
        {
          text: t({
            en: "The support team is amazing and the platform keeps getting better. Highly recommend for any AI project.",
            zh: "支持团队非常棒，平台也在不断改进。强烈推荐给任何 AI 项目。",
          }),
          image: "/avatars/user6.avif",
          name: "James Wilson",
          role: t({ en: "Full Stack Developer", zh: "全栈开发者" }),
        },
        {
          text: t({
            en: "VibeAny's AI templates are incredibly well-designed. They've accelerated our development process by months.",
            zh: "VibeAny 的 AI 模板设计精良。它们将我们的开发进程加速了数月。",
          }),
          image: "/avatars/user7.avif",
          name: "Alex Thompson",
          role: t({ en: "AI Research Lead", zh: "AI 研究负责人" }),
        },
        {
          text: t({
            en: "The documentation is comprehensive and the community support is fantastic. Makes complex AI development accessible.",
            zh: "文档全面，社区支持出色。让复杂的 AI 开发变得触手可及。",
          }),
          image: "/avatars/user8.avif",
          name: "Maria Garcia",
          role: t({ en: "Machine Learning Engineer", zh: "机器学习工程师" }),
        },
        {
          text: t({
            en: "Exceptional platform that delivers on its promises. Our team's productivity has increased dramatically since we started using it.",
            zh: "一个言出必行的卓越平台。自从开始使用后，我们团队的生产力大幅提升。",
          }),
          image: "/avatars/user9.avif",
          name: "Robert Lee",
          role: t({ en: "Tech Lead", zh: "技术负责人" }),
        },
      ],
    },
    mediaCoverage: {
      display: true,
      title: t({ en: "Featured In", zh: "媒体报道" }),
      description: t({
        en: "See what the tech community is saying about our platform",
        zh: "看看科技社区对我们平台的评价",
      }),
      items: [
        {
          title: t({
            en: "Sample Article Title: Advanced Technology Research Paper",
            zh: "示例文章标题：先进技术研究论文",
          }),
          description: t({
            en: "This is a placeholder description for a technology research paper. It demonstrates how research articles might be featured in this section...",
            zh: "这是一篇技术研究论文的占位描述。它展示了研究文章如何在此部分展示...",
          }),
          imagePath: "/landing/media/tech-research-paper.avif",
          source: "Tech Journal",
          date: "2025.09.15",
          href: "#",
          external: true,
        },
        {
          title: t({
            en: "Example Feature: Innovative AI Solutions in Modern Development",
            zh: "示例专题：现代开发中的创新 AI 解决方案",
          }),
          description: t({
            en: "This is a sample description showcasing how AI solutions and development tools might be covered in technology publications...",
            zh: "这是一个示例描述，展示 AI 解决方案和开发工具如何在科技出版物中被报道...",
          }),
          imagePath: "/landing/media/ai-solutions-development.avif",
          source: "AI Weekly",
          date: "2025.08.20",
          href: "#",
          external: true,
        },
        {
          title: t({
            en: "Demo Coverage: Platform Innovation and Developer Experience",
            zh: "演示报道：平台创新与开发者体验",
          }),
          description: t({
            en: "A placeholder article about platform innovation and how modern tools are transforming the developer experience across various industries...",
            zh: "一篇关于平台创新以及现代工具如何改变各行业开发者体验的占位文章...",
          }),
          imagePath: "/landing/media/platform-innovation.avif",
          source: "Tech News",
          date: "2025.07.10",
          href: "#",
          external: true,
        },
        {
          title: t({
            en: "Sample Story: Building Tomorrow's Software Solutions",
            zh: "示例故事：构建明日软件解决方案",
          }),
          description: t({
            en: "An example article discussing emerging technologies and their impact on software development practices and methodologies...",
            zh: "一篇讨论新兴技术及其对软件开发实践和方法论影响的示例文章...",
          }),
          imagePath: "/landing/media/software-solutions.avif",
          source: "Dev Magazine",
          date: "2025.05.25",
          href: "#",
          external: true,
        },
        {
          title: t({
            en: "Placeholder Feature: The Evolution of Development Tools",
            zh: "占位专题：开发工具的演进",
          }),
          description: t({
            en: "A sample article exploring how development tools are evolving and their impact on productivity and code quality...",
            zh: "一篇探索开发工具如何演进及其对生产力和代码质量影响的示例文章...",
          }),
          imagePath: "/landing/media/development-tools.avif",
          source: "Code Review",
          date: "2025.02.18",
          href: "#",
          external: true,
        },
      ],
    },
    faq: {
      display: true,
      title: t({ en: "Frequently Asked Questions", zh: "常见问题" }),
      description: t({
        en: "Discover quick and comprehensive answers to common questions about our platform, services, and features.",
        zh: "快速全面地了解关于我们平台、服务和功能的常见问题解答。",
      }),
      items: [
        {
          question: t({ en: "What is the deposit for?", zh: "定金用途是什么？" }),
          answer: t({
            en: "The 5,000 CNY deposit secures your project slot and covers initial requirements analysis. It will be deducted from the final payment.",
            zh: "5000 元定金用于锁定项目档期和需求分析，最终会从总价中扣除。",
          }),
        },
        {
          question: t({ en: "How long does development take?", zh: "开发周期多久？" }),
          answer: t({
            en: "Typical projects: Mini Program 2-4 weeks, H5 1-3 weeks, App 2-6 months, PC website 2-8 weeks. Exact timeline depends on requirements.",
            zh: "一般项目：小程序 2-4 周，H5 1-3 周，App 2-6 个月，PC 网站 2-8 周。具体根据需求而定。",
          }),
        },
        {
          question: t({ en: "Do you provide maintenance?", zh: "提供维护服务吗？" }),
          answer: t({
            en: "Yes, we provide 1 year of free maintenance including bug fixes and minor updates. Extended maintenance plans are available.",
            zh: "是的，我们提供 1 年免费维护，包括 Bug 修复和小版本更新。可选购延保服务。",
          }),
        },
      ],
    },
    cta: {
      display: true,
      title: t({ en: "Start Your Project", zh: "开始您的项目" }),
      description: t({
        en: "Pay 5,000 CNY deposit to lock your project slot. Our team will contact you within 24 hours.",
        zh: "支付 5000 元定金锁定项目档期，我们的团队将在 24 小时内联系您。",
      }),
      primaryButtonText: t({ en: "Pay Deposit", zh: "支付定金" }),
      primaryButtonHref: "/deposit",
      secondaryButtonText: t({ en: "Contact Us", zh: "联系我们" }),
      secondaryButtonHref: "/contact",
    },
    header: {
      display: true,
      items: [
        {
          label: t({ en: "Features", zh: "特点" }),
          href: "/about",
        },
        {
          label: t({ en: "Pricing", zh: "定价" }),
          href: "/#pricing",
        },
      ] as const,
    },
    footer: {
      display: true,
      companyName: "长沙涛澜启飞科技有限公司",
      icp: "京ICP备XXXXXXXX号-1",
      scrollToTop: t({ en: "Back to Top", zh: "返回顶部" }),
      sections: [
        {
          title: t({ en: "Services", zh: "服务" }),
          links: [
            { label: t({ en: "Mini Program", zh: "小程序开发" }), href: "/#services" },
            { label: t({ en: "H5", zh: "H5 开发" }), href: "/#services" },
            { label: t({ en: "App", zh: "App 开发" }), href: "/#services" },
            { label: t({ en: "PC Website", zh: "PC 网站" }), href: "/#services" },
            { label: t({ en: "Consulting", zh: "技术咨询" }), href: "/#services" },
          ],
        },
        {
          title: t({ en: "Company", zh: "公司" }),
          links: [
            { label: t({ en: "About Us", zh: "关于我们" }), href: "/about" },
            { label: t({ en: "Contact", zh: "联系我们" }), href: "/contact" },
          ],
        },
        {
          title: t({ en: "Legal", zh: "法律" }),
          links: [
            { label: t({ en: "Terms of Service", zh: "服务条款" }), href: "/legal/terms" },
            { label: t({ en: "Privacy Policy", zh: "隐私政策" }), href: "/legal/privacy" },
          ],
        },
      ],
    },
  },
} satisfies Dictionary
