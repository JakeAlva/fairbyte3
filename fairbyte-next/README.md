# Fairbyte (Next.js + Tailwind)

Modern marketing site + API route using the Next.js App Router.

## Dev
```bash
npm i
npm run dev
```
Open http://localhost:3000

## Deploy to Netlify
1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import from Git**.
3. Netlify detects Next.js automatically.
   - Build command: `npm run build`
   - Publish directory: auto
4. (Optional static export) Use: `npm run build && npx next export` and set publish dir to `out`.

## Domain
Connect `fairbyte.us` under Netlify **Domain settings** and copy the DNS records to GoDaddy.

## Email for contact form
Edit `/app/api/contact/route.ts` to send mail via a provider (Resend, SendGrid, SMTP). Set env vars in Netlify and deploy.
