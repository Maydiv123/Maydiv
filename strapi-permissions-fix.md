# Fix Strapi Collection Permissions

## Step 1: Check Collection Status

1. Go to **Content Manager** in your Strapi admin
2. Look at the left sidebar - you should see your collections
3. Note which ones are showing as "draft" vs "published"

## Step 2: Fix Collection Permissions

### 2.1 Make Collections Editable
If you can't edit collections, it's likely a permissions issue:

1. Go to **Settings** → **Users & Permissions plugin** → **Roles**
2. Click on **"Administrator"** role (or your current role)
3. Scroll down to find your content types
4. Make sure these permissions are enabled:
   - ✅ **find** (read)
   - ✅ **findOne** (read single)
   - ✅ **create** (create new)
   - ✅ **update** (edit)
   - ✅ **delete** (delete)
   - ✅ **publish** (publish content)
5. Click **"Save"**

### 2.2 Make Collections Public
To make collections accessible via API:

1. Go to **Settings** → **Users & Permissions plugin** → **Roles**
2. Click on **"Public"** role
3. Find your content types in the list
4. Enable these permissions:
   - ✅ **find** (read all)
   - ✅ **findOne** (read single)
5. Click **"Save"**

## Step 3: Publish Draft Content

If your content is in "draft" status:

1. Go to **Content Manager** → [Your Collection]
2. Click on any draft entry
3. Click **"Publish"** button (top right)
4. Repeat for all draft entries

## Step 4: Check Collection Types

Make sure your collections match what your Next.js app expects:

### Expected Collections:
- **Post** (for blog posts)
- **Service** (for services)

### If you have different names:
- Rename them to match, OR
- Update your Next.js code to use the correct names

## Step 5: Test API Access

After fixing permissions, test these URLs in your browser:

1. **All Posts**: `https://strapi-production-a6a4.up.railway.app/api/posts`
2. **All Services**: `https://strapi-production-a6a4.up.railway.app/api/services`

You should see JSON responses instead of errors.

## Common Issues & Solutions

### Issue: "Cannot edit" error
**Solution**: Check administrator role permissions

### Issue: "Cannot publish" error  
**Solution**: Enable publish permission in your role

### Issue: API returns 403
**Solution**: Enable public role permissions

### Issue: Collection names don't match
**Solution**: Either rename collections or update Next.js code

## Quick Fix Commands

If you need to reset permissions:

1. Go to **Settings** → **Users & Permissions plugin** → **Roles**
2. Click **"Administrator"**
3. Click **"Select all"** for your content types
4. Click **"Save"**
5. Repeat for **"Public"** role (but only select **find** and **findOne**)

## Verify Your Setup

After making changes:

1. Try editing a collection entry
2. Try publishing an entry
3. Test the API endpoints
4. Check your Next.js app

If you're still having issues, please tell me:
- What collection names you currently have
- What specific error messages you're seeing
- Whether you can see the collections in Content Manager 