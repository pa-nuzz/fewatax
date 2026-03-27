# Deployment Instructions

## Frontend (Next.js)
- Deploy to Vercel (recommended for Next.js 14)
- Set environment variables for API endpoints, domain, etc.

## Backend (FastAPI)
- Deploy to Railway or Render
- Set environment variables: DATABASE_URL, SECRET_KEY, EMAIL_API_KEY, SMS_API_KEY

## PostgreSQL
- Use Railway, Supabase, or managed PostgreSQL
- Run `schema.sql` to initialize tables

## Google Fonts, Lucide, shadcn/ui
- All set up in codebase

## Google Analytics & Search Console
- Add GA4 and GSC tags in Next.js `_app.tsx` or via Vercel dashboard

## Google Business Profile
- See `/docs/google-business-profile-setup.md` for step-by-step guide

---

For more, see the main README and backend/README.md.
