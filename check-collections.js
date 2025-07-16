// Script to check what collections exist in your Strapi instance
const fetch = require('node-fetch');

const STRAPI_URL = 'https://strapi-production-a6a4.up.railway.app';
const API_TOKEN = '74b6b8cb3a28443005fd6bebd9f4a11abc7254f6b0ac6632bced5b7404db3d8265f46d33687f425e36a78e64dc18a4b9876892f593c7c47047c494e14c82e9f25b20e78d74c4fde784f123100898ae33c768bec9527a74c2c601973515eeaf5d95313bfb9e8b36d67c91422f3cef1cbe324714e8eee1573674f6461a1a63f368';

async function checkCollections() {
  console.log('🔍 Checking your Strapi collections...\n');

  // Common collection names to test
  const collectionsToTest = [
    'posts', 'post', 'articles', 'article',
    'services', 'service', 'products', 'product',
    'pages', 'page', 'content', 'blog'
  ];

  for (const collection of collectionsToTest) {
    try {
      console.log(`Testing /api/${collection}...`);
      const response = await fetch(`${STRAPI_URL}/api/${collection}`, {
        headers: {
          'Authorization': `Bearer ${API_TOKEN}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log(`✅ Found collection: ${collection}`);
        console.log(`   Status: ${response.status}`);
        console.log(`   Items: ${data.data?.length || 0}`);
        console.log(`   Meta: ${JSON.stringify(data.meta || {})}`);
      } else if (response.status === 403) {
        console.log(`❌ Collection exists but access denied: ${collection} (403)`);
      } else if (response.status === 404) {
        console.log(`❌ Collection not found: ${collection} (404)`);
      } else {
        console.log(`⚠️  Unexpected response for ${collection}: ${response.status}`);
      }
    } catch (error) {
      console.log(`❌ Error testing ${collection}: ${error.message}`);
    }
    console.log('');
  }

  console.log('📋 Summary:');
  console.log('- If you see "403" errors, the collections exist but need permissions');
  console.log('- If you see "404" errors, the collections don\'t exist');
  console.log('- If you see "✅ Found collection", everything is working!');
}

checkCollections(); 