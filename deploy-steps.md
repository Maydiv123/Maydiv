# Quick Deployment Steps

## Repository 1: Next.js App
```bash
# In Maydiv folder
git init
git add .
git commit -m "Initial commit"
# Create GitHub repo: maydiv-nextjs-app
git remote add origin https://github.com/yourusername/maydiv-nextjs-app.git
git push -u origin main
# Deploy on Vercel
```

## Repository 2: Strapi Backend
```bash
# In my-strapi folder
git init
git add .
git commit -m "Initial Strapi setup"
# Create GitHub repo: maydiv-strapi-backend
git remote add origin https://github.com/yourusername/maydiv-strapi-backend.git
git push -u origin main
# Deploy on Railway
```

## After Deployment:
- Update .env files with new URLs
- Share URLs with SEO expert 