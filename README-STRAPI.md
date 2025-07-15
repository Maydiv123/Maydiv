# Strapi Integration Guide

## Quick Setup

1. **Install Strapi SDK** ✅
   ```bash
   npm install @strapi/sdk-js
   ```

2. **Create Environment Variables**
   Create `.env.local` file:
   ```
   NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
   STRAPI_API_TOKEN=your_api_token_here
   ```

3. **Files Created:**
   - `src/lib/strapi.js` - Client-side utilities
   - `src/lib/strapi-server.js` - Server-side utilities
   - `src/components/StrapiExample.jsx` - Client component example
   - `src/components/ServerStrapiExample.jsx` - Server component example
   - `src/app/api/posts/route.js` - API route example

## Usage Examples

### Client Component
```jsx
import StrapiExample from '../components/StrapiExample';

export default function Page() {
  return <StrapiExample />;
}
```

### Server Component
```jsx
import ServerStrapiExample from '../components/ServerStrapiExample';

export default function Page() {
  return <ServerStrapiExample />;
}
```

### Direct API Call
```jsx
import { getContentType } from '../lib/strapi';

const posts = await getContentType('posts', {
  populate: '*',
  pagination: { page: 1, pageSize: 10 }
});
```

## Next Steps
1. Start your Strapi instance
2. Create content types in Strapi admin
3. Get your API token from Strapi settings
4. Update environment variables
5. Replace 'posts' with your actual content type names 