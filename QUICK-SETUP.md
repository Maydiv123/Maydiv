# 🚀 Quick Strapi Setup

## Option 1: Manual Strapi Installation

1. **Run this command:**
   ```bash
   npx create-strapi-app@latest my-strapi --quickstart
   ```

2. **When prompted:**
   - Choose "Skip" for login
   - Wait for installation to complete

3. **Access Strapi Admin:**
   - Go to: http://localhost:1337/admin
   - Create admin account
   - Go to Settings → API Tokens
   - Create new token with "Full access"
   - Copy the token

4. **Update .env.local:**
   ```env
   NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
   STRAPI_API_TOKEN=your_copied_token_here
   ```

## Option 2: Use Existing Strapi Instance

If you already have Strapi running:
1. Get your API token from Strapi admin
2. Update `.env.local` with your Strapi URL and token

## Option 3: Test with Mock Data

For testing without Strapi:
1. Use the components as-is
2. They'll show "No posts found" until you connect real data

## ✅ Your Next.js is Ready!

All files are created:
- `src/lib/strapi.js` ✅
- `src/lib/strapi-server.js` ✅  
- `src/components/StrapiExample.jsx` ✅
- `src/components/ServerStrapiExample.jsx` ✅
- `src/app/api/posts/route.js` ✅
- `.env.local` ✅

Just add your Strapi token and you're good to go! 