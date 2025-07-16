import { getContentTypeById, getContentType } from '../../../lib/strapi';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Generate static params for all blog posts
export async function generateStaticParams() {
  try {
    const response = await getContentType('posts', {
      populate: '*',
      fields: ['id']
    });
    
    if (response.data) {
      return response.data.map((post) => ({
        id: post.id.toString(),
      }));
    }
  } catch (error) {
    console.error('Error generating static params for blog posts:', error);
  }
  
  return [];
}

export default async function BlogPostPage({ params }) {
  let post = null;
  let error = null;

  try {
    const response = await getContentTypeById('posts', params.id, {
      populate: '*'
    });
    post = response.data;
  } catch (err) {
    error = err.message;
  }

  if (error || !post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors duration-200 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          
          <div className="flex items-center text-blue-100 mb-4">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {post.description || 'Untitled Post'}
          </h1>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl"></div>
      </div>

      {/* Post Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
          {/* Featured Image Placeholder */}
          <div className="h-80 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl mb-8 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <svg className="h-24 w-24 text-white/80 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-white/90 text-gray-800 backdrop-blur-sm">
                Blog Post
              </span>
            </div>
          </div>

          {/* Post Body */}
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed whitespace-pre-wrap text-lg">
              {post.text || 'No content available'}
            </div>
          </div>

          {/* Post Meta */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Published
                </span>
                <span className="text-sm text-gray-500">
                  Post ID: {post.id}
                </span>
              </div>
              
              <div className="flex space-x-4">
                <button className="inline-flex items-center px-4 py-2 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200 hover:bg-blue-50 rounded-lg">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                  Share
                </button>
                <button className="inline-flex items-center px-4 py-2 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200 hover:bg-blue-50 rounded-lg">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  Bookmark
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">More Posts</h2>
          <div className="text-center py-8">
            <p className="text-gray-600 mb-4">Check out our other blog posts</p>
            <Link 
              href="/blog" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 