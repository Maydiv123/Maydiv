// Test script to verify Strapi API endpoints
const fetch = require('node-fetch');

const STRAPI_URL = 'https://strapi-production-a6a4.up.railway.app';
const API_TOKEN = '74b6b8cb3a28443005fd6bebd9f4a11abc7254f6b0ac6632bced5b7404db3d8265f46d33687f425e36a78e64dc18a4b9876892f593c7c47047c494e14c82e9f25b20e78d74c4fde784f123100898ae33c768bec9527a74c2c601973515eeaf5d95313bfb9e8b36d67c91422f3cef1cbe324714e8eee1573674f6461a1a63f368';

async function testAPI() {
  console.log('Testing Strapi API endpoints...\n');

  // Test 1: Posts endpoint
  try {
    console.log('1. Testing /api/posts...');
    const postsResponse = await fetch(`${STRAPI_URL}/api/posts`, {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });
    
    if (postsResponse.ok) {
      const postsData = await postsResponse.json();
      console.log('✅ Posts API working!');
      console.log(`   Found ${postsData.data?.length || 0} posts`);
    } else {
      console.log(`❌ Posts API failed: ${postsResponse.status} ${postsResponse.statusText}`);
    }
  } catch (error) {
    console.log(`❌ Posts API error: ${error.message}`);
  }

  console.log('');

  // Test 2: Services endpoint
  try {
    console.log('2. Testing /api/services...');
    const servicesResponse = await fetch(`${STRAPI_URL}/api/services`, {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });
    
    if (servicesResponse.ok) {
      const servicesData = await servicesResponse.json();
      console.log('✅ Services API working!');
      console.log(`   Found ${servicesData.data?.length || 0} services`);
    } else {
      console.log(`❌ Services API failed: ${servicesResponse.status} ${servicesResponse.statusText}`);
    }
  } catch (error) {
    console.log(`❌ Services API error: ${error.message}`);
  }

  console.log('\nTest completed!');
}

testAPI(); 