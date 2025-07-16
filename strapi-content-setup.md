# Strapi Content Types Setup Guide

## Step 1: Access Strapi Admin Panel
- Go to: https://strapi-production-a6a4.up.railway.app/admin
- Login with your admin credentials

## Step 2: Create "Posts" Content Type

### 2.1 Create New Content Type
1. Go to **Content-Type Builder** in the left sidebar
2. Click **"Create new collection type"**
3. Name it: `Post`
4. Click **"Continue"**

### 2.2 Add Fields to Posts
Add these fields to your Post content type:

1. **Title** (Text field)
   - Type: Short text
   - Required: Yes

2. **Content** (Rich Text field)
   - Type: Rich text
   - Required: Yes

3. **Excerpt** (Text field)
   - Type: Long text
   - Required: No

4. **Featured Image** (Media field)
   - Type: Media
   - Required: No
   - Multiple media: No

5. **Slug** (Text field)
   - Type: Short text
   - Required: No

6. **Published Date** (Date field)
   - Type: Date
   - Required: No

### 2.3 Save Posts Content Type
1. Click **"Save"**
2. Click **"Restart"** when prompted

## Step 3: Create "Services" Content Type

### 3.1 Create New Content Type
1. Go to **Content-Type Builder** again
2. Click **"Create new collection type"**
3. Name it: `Service`
4. Click **"Continue"**

### 3.2 Add Fields to Services
Add these fields to your Service content type:

1. **Title** (Text field)
   - Type: Short text
   - Required: Yes

2. **Description** (Rich Text field)
   - Type: Rich text
   - Required: Yes

3. **Icon** (Text field)
   - Type: Short text
   - Required: No
   - Description: "CSS class name for icon (e.g., 'fas fa-code')"

4. **Image** (Media field)
   - Type: Media
   - Required: No
   - Multiple media: No

5. **Price** (Number field)
   - Type: Number
   - Required: No

6. **Duration** (Text field)
   - Type: Short text
   - Required: No
   - Description: "e.g., '2-3 weeks', '1 month'"

### 3.3 Save Services Content Type
1. Click **"Save"**
2. Click **"Restart"** when prompted

## Step 4: Configure API Permissions

### 4.1 Set Public Permissions
1. Go to **Settings** → **Users & Permissions plugin** → **Roles**
2. Click on **"Public"** role
3. Find your content types (`Post` and `Service`)
4. Enable these permissions:
   - **find** ✅
   - **findOne** ✅
5. Click **"Save"**

### 4.2 Set Authenticated Permissions (Optional)
1. Click on **"Authenticated"** role
2. Enable the same permissions for both content types
3. Click **"Save"**

## Step 5: Add Sample Content

### 5.1 Add Sample Posts
1. Go to **Content Manager** → **Post**
2. Click **"Create new entry"**
3. Add sample post:
   - Title: "Welcome to Our Blog"
   - Content: "This is our first blog post. We're excited to share our thoughts and insights with you."
   - Excerpt: "An introduction to our blog"
4. Click **"Save"** and **"Publish"**

### 5.2 Add Sample Services
1. Go to **Content Manager** → **Service**
2. Click **"Create new entry"**
3. Add sample service:
   - Title: "Web Development"
   - Description: "We create modern, responsive websites using the latest technologies."
   - Icon: "fas fa-code"
   - Price: 1500
   - Duration: "2-3 weeks"
4. Click **"Save"** and **"Publish"**

## Step 6: Test Your API

After completing the setup, test your API endpoints:

1. **Posts API**: https://strapi-production-a6a4.up.railway.app/api/posts
2. **Services API**: https://strapi-production-a6a4.up.railway.app/api/services

You should now see JSON responses instead of 403 errors.

## Troubleshooting

If you still get 403 errors:
1. Make sure content types are published
2. Check that permissions are set correctly
3. Verify the API token is valid
4. Try accessing the API directly in browser first 