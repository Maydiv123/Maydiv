// Server-side Strapi configuration
const strapiConfig = {
  url: process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337',
  apiToken: process.env.STRAPI_API_TOKEN,
  prefix: '/api',
};

// Server-side helper function to fetch data
export async function fetchFromStrapi(endpoint, options = {}) {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      ...(process.env.STRAPI_API_TOKEN && {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      }),
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

// Server-side function to get content types
export async function getServerContentType(collectionType, params = {}) {
  try {
    const queryParams = new URLSearchParams();
    
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
    return await fetchFromStrapi(endpoint);
  } catch (error) {
    console.error(`Error fetching ${collectionType}:`, error);
    throw error;
  }
}

// Server-side function to get a single item by ID
export async function getServerContentTypeById(collectionType, id, params = {}) {
  try {
    const queryParams = new URLSearchParams();
    
    if (params.populate) {
      queryParams.append('populate', params.populate);
    }
    
    const endpoint = `/api/${collectionType}/${id}?${queryParams.toString()}`;
    return await fetchFromStrapi(endpoint);
  } catch (error) {
    console.error(`Error fetching ${collectionType} with id ${id}:`, error);
    throw error;
  }
}

// Server-side function to get global data
export async function getServerGlobalData() {
  try {
    return await fetchFromStrapi('/api/global?populate=*');
  } catch (error) {
    console.error('Error fetching global data:', error);
    throw error;
  }
} 