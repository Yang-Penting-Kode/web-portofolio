<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:next-best-practices-skill -->
## Next.js Best Practices Skill

When writing or reviewing any Next.js code in this project, load and apply the rules from `.agents/skills/next-best-practices/SKILL.md`.

This skill covers:
- **File Conventions** — project structure, route segments, middleware rename (v16: `middleware` → `proxy`)
- **RSC Boundaries** — async client component detection, non-serializable props, Server Action rules
- **Async Patterns** — async `params`, `searchParams`, `cookies()`, `headers()` (Next.js 15+)
- **Runtime Selection** — Node.js vs Edge runtime guidance
- **Directives** — `'use client'`, `'use server'`, `'use cache'`
- **Functions** — navigation hooks, server functions, generate functions
- **Error Handling** — `error.tsx`, `global-error.tsx`, `not-found.tsx`, `redirect`, `notFound`, `forbidden`
- **Data Patterns** — Server Components vs Server Actions vs Route Handlers, avoiding waterfalls
- **Route Handlers** — `route.ts` basics, conflicts with `page.tsx`, when to use vs Server Actions
- **Metadata & OG Images** — static/dynamic metadata, `generateMetadata`, `next/og`
- **Image Optimization** — always use `next/image`, remote config, responsive `sizes`, blur placeholders
- **Font Optimization** — `next/font` with Google Fonts, local fonts, Tailwind integration
- **Bundling** — server-incompatible packages, CSS imports, ESM/CJS issues, bundle analysis
- **Scripts** — `next/script` vs native tags, loading strategies, Google Analytics
- **Hydration Errors** — common causes and fixes
- **Suspense Boundaries** — CSR bailout hooks requiring Suspense
- **Parallel & Intercepting Routes** — modal patterns, `@slot`, `(.)` interceptors
- **Self-Hosting** — `output: 'standalone'` for Docker, multi-instance ISR cache handlers
- **Debug Tricks** — MCP endpoint, `--debug-build-paths`
<!-- END:next-best-practices-skill -->
