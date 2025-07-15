import { NextResponse } from 'next/server';
import { getServerContentType } from '../../../lib/strapi-server';

export async function GET(request) {
  try {
    // Get query parameters from the request
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || 1;
    const pageSize = searchParams.get('pageSize') || 10;
    const populate = searchParams.get('populate') || '*';
    const sort = searchParams.get('sort') || 'createdAt:desc';

    // Fetch posts from Strapi
    const posts = await getServerContentType('posts', {
      populate,
      pagination: {
        page: parseInt(page),
        pageSize: parseInt(pageSize)
      },
      sort: [sort]
    });

    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error in posts API route:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
} 