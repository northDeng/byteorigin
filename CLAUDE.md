# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**VibeAny** is a production-grade full-stack boilerplate for building SaaS applications with TanStack Start + React 19. It includes authentication, payments, AI integration, internationalization, and more.

**Current Customization**: 长沙涛澜启飞科技有限公司官网 - 软件外包服务，支持定金支付（微信/支付宝）。

## Tech Stack

- **Framework**: TanStack Start + React 19 + Vite
- **Router**: TanStack Router (file-based routing)
- **Database**: PostgreSQL + Drizzle ORM
- **Auth**: Better Auth (email/password, OAuth, magic links)
- **Payment**: Stripe, Creem, PayPal, WeChat Pay, Alipay
- **AI**: Vercel AI SDK (100+ models)
- **Styling**: Tailwind CSS v4 + shadcn/ui + Radix
- **i18n**: Intlayer (type-safe, Chinese + English)
- **Content**: Fumadocs (docs) + MDX (blog)

## Development Commands

```bash
# Development
pnpm dev              # Start dev server on port 3377

# Database
pnpm db:push          # Push schema changes to database
pnpm db:studio        # Open Drizzle Studio

# Build & Deploy
pnpm build            # Production build
pnpm deploy           # Deploy to Cloudflare Workers

# Code Quality
pnpm lint             # Run Biome linter
pnpm lint:fix         # Fix linting issues
pnpm test             # Run tests
```

## Project Structure

```
src/
├── actions/              # Server actions
├── config/
│   ├── locale/           # i18n content files (*.content.ts)
│   └── site-config.ts    # Site configuration
├── db/                   # Drizzle schemas
│   ├── auth.schema.ts    # User, session, account
│   ├── payment.schema.ts # Payment records
│   ├── order.schema.ts   # Orders
│   └── subscription.schema.ts # Subscriptions
├── integrations/
│   ├── ai/               # AI providers
│   ├── payment/          # Payment adapters
│   └── storage/          # S3-compatible storage
├── routes/
│   ├── api/              # API routes
│   └── {-$locale}/       # i18n page routes
│       ├── _main/
│       │   ├── _landing/ # Landing pages
│       │   ├── admin/    # Admin panel
│       │   └── chat/     # AI chat
│       ├── docs/         # Documentation
│       └── login/        # Login page
├── services/             # Business logic
└── shared/
    ├── components/       # UI components
    ├── hooks/            # Custom hooks
    ├── lib/              # Utilities
    └── types/            # TypeScript types
```

## Key Development Rules

### 1. Styling
- **ALWAYS** use `cn()` function for className merging
- **NEVER** use string concatenation for classNames

```tsx
// ❌ WRONG
<div className={`base ${isActive ? "active" : ""}`} />

// ✅ CORRECT
import { cn } from "@/shared/lib/utils"
<div className={cn("base", isActive && "active")} />
```

### 2. Internationalization
- Use `LocalizedLink` instead of TanStack's `<Link>`
- Use `useLocalizedNavigate()` for programmatic navigation
- Use `useIntlayer()` to get i18n content

```tsx
import { LocalizedLink } from "@/shared/components/locale/localized-link"
import { useIntlayer } from "react-intlayer"

const { title } = useIntlayer("landing")
<LocalizedLink to="/chat">{title.value}</LocalizedLink>
```

### 3. Images
- Use `@unpic/react` Image component for optimized loading

```tsx
import { Image } from "@unpic/react"
<Image src="/logo.png" alt="Logo" width={100} height={100} />
```

### 4. API Responses
- Use standardized response format

```tsx
import { Resp } from "@/shared/lib/tools/response"

// Success
return Resp.success({ data: "value" })

// Error
return Resp.error("Error message", 400)
```

### 5. Database
- **NEVER** modify migration files without user permission
- Derive types from schemas in `shared/types`
- Use Drizzle ORM for all database operations

## Payment System

### Supported Providers
- Stripe (subscription + one-time)
- Creem (subscription + one-time)
- PayPal (one-time)
- WeChat Pay (one-time, interface reserved)
- Alipay (one-time, interface reserved)

### Payment Flow
1. Create order via `OrderService`
2. Get payment adapter via `getPaymentAdapter(provider)`
3. Call `adapter.createCheckout(params)`
4. Handle webhook at `/api/payment/webhook.$provider`

### Key Files
- `src/db/payment.schema.ts` - Payment records
- `src/db/order.schema.ts` - Order management
- `src/integrations/payment/adapters/` - Payment adapters
- `src/routes/api/payment/` - Payment API routes

## Internationalization

### Content Files
Located in `src/config/locale/*.content.ts`

```typescript
import { t } from "intlayer"

export default {
  key: "landing",
  content: {
    hero: {
      title: t({
        en: "English text",
        zh: "中文文本",
      }),
    },
  },
}
```

### Usage in Components
```tsx
const landing = useIntlayer("landing")
<h1>{landing.hero.title.value}</h1>
```

## Common Patterns

### Creating New Pages
1. Create route file in `src/routes/{-$locale}/_main/_landing/`
2. Use `createFileRoute()` from `@tanstack/react-router`
3. Add i18n content to `src/config/locale/landing.content.ts`

### Adding New API Endpoints
1. Create file in `src/routes/api/`
2. Use `createFileRoute()` with server handlers
3. Apply middleware (e.g., `apiAuthMiddleware`)
4. Return responses using `Resp.success()` or `Resp.error()`

### Database Schema Changes
1. Modify schema files in `src/db/`
2. Run `pnpm db:push` to apply changes
3. Update types in `src/shared/types/`

## Testing

- Run tests: `pnpm test`
- Test coverage should be 80%+
- Use TDD workflow when adding new features

## Deployment

### Cloudflare Workers
```bash
pnpm build
wrangler deploy
```

### Docker
```bash
docker build -t vibe-any .
docker run -d -p 3000:3000 vibe-any
```

### Node.js
```bash
pnpm build
node .output/server/index.mjs
```

## Important Notes

- Port: Development server runs on **3377**
- Database: PostgreSQL required for full functionality
- Static mode: Landing pages work without database
- aria-label: Keep in English (no i18n needed)
- Console logs: Remove before committing
