// Quick Strapi Setup Script
console.log('🚀 Strapi Integration Setup');

console.log('\n📋 Steps to complete:');
console.log('1. Wait for Strapi installation to complete');
console.log('2. Go to http://localhost:1337/admin');
console.log('3. Create your admin account');
console.log('4. Go to Settings → API Tokens');
console.log('5. Create new token with "Full access"');
console.log('6. Copy the token and update .env.local');

console.log('\n🔧 Your .env.local should look like:');
console.log('NEXT_PUBLIC_STRAPI_URL=http://localhost:1337');
console.log('STRAPI_API_TOKEN=your_actual_token_here');

console.log('\n📁 Files created:');
console.log('✅ src/lib/strapi.js');
console.log('✅ src/lib/strapi-server.js');
console.log('✅ src/components/StrapiExample.jsx');
console.log('✅ src/components/ServerStrapiExample.jsx');
console.log('✅ src/app/api/posts/route.js');
console.log('✅ .env.local');

console.log('\n�� Ready to use!'); 