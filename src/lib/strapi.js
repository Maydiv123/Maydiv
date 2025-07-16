// Strapi configuration
const strapiConfig = {
  url: process.env.NEXT_PUBLIC_STRAPI_URL || 'https://strapi-production-a6a4.up.railway.app',
  apiToken: process.env.STRAPI_API_TOKEN || '74b6b8cb3a28443005fd6bebd9f4a11abc7254f6b0ac6632bced5b7404db3d8265f46d33687f425e36a78e64dc18a4b9876892f593c7c47047c494e14c82e9f25b20e78d74c4fde784f123100898ae33c768bec9527a74c2c601973515eeaf5d95313bfb9e8b36d67c91422f3cef1cbe324714e8eee1573674f6461a1a63f368',
  prefix: '/api',
};

// Helper function to fetch data from Strapi
export async function fetchAPI(endpoint, options = {}) {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const mergedOptions = {
    ...defaultOptions,
    ...options,
  };

  const url = `${strapiConfig.url}${endpoint}`;
  
  try {
    const response = await fetch(url, mergedOptions);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching from Strapi:', error);
    throw error;
  }
}

// Helper function to get content types
export async function getContentType(collectionType, params = {}) {
  try {
    const queryParams = new URLSearchParams();
    
    // Add common parameters
    if (params.populate) {
      queryParams.append('populate', params.populate);
    }
    if (params.filters) {
      queryParams.append('filters', JSON.stringify(params.filters));
    }
    if (params.sort) {
      queryParams.append('sort', params.sort);
    }
    if (params.pagination) {
      queryParams.append('pagination', JSON.stringify(params.pagination));
    }
    
    const endpoint = `/api/${collectionType}?${queryParams.toString()}`;
    return await fetchAPI(endpoint);
  } catch (error) {
    console.error(`Error fetching ${collectionType}:`, error);
    throw error;
  }
}

// Helper function to get a single item by ID
export async function getContentTypeById(collectionType, id, params = {}) {
  try {
    const queryParams = new URLSearchParams();
    
    if (params.populate) {
      queryParams.append('populate', params.populate);
    }
    
    const endpoint = `/api/${collectionType}/${id}?${queryParams.toString()}`;
    return await fetchAPI(endpoint);
  } catch (error) {
    console.error(`Error fetching ${collectionType} with id ${id}:`, error);
    throw error;
  }
}

// Helper function to get global data (like site settings)
export async function getGlobalData() {
  try {
    return await fetchAPI('/api/global?populate=*');
  } catch (error) {
    console.error('Error fetching global data:', error);
    throw error;
  }
} 