import { getContentType } from '../../lib/strapi';
import Link from 'next/link';

export default async function BlogPage() {
  let posts = [];
  let error = null;

  try {
    const response = await getContentType('posts', {
      populate: '*',
      pagination: {
        page: 1,
        pageSize: 20
      },
      sort: ['createdAt:desc']
    });
    posts = response.data || [];
  } catch (err) {
    error = err.message;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog</h1>
            <p className="text-red-600">Error loading posts: {error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Hero Header */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Blog
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Discover insights, tutorials, and stories from our team of experts
            </p>
            <div className="mt-6">
              <span className="bg-white/20 rounded-full px-4 py-2 text-sm">
                {posts.length} {posts.length === 1 ? 'Article' : 'Articles'} Published
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <div className="mx-auto h-24 w-24 text-gray-400 mb-6">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">No posts yet</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              We're working on some amazing content. Check back soon for the latest insights and updates!
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <article 
                key={post.id} 
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                {/* Post Image */}
                <div className="relative h-48 bg-blue-500 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="h-16 w-16 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-white/90 text-gray-800">
                      Blog Post
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
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

                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {post.description || 'Untitled Post'}
                  </h2>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.text ? (post.text.length > 120 ? post.text.substring(0, 120) + '...' : post.text) : 'No content available'}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <Link 
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm transition-all duration-300"
                    >
                      Read Full Article
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                      Published
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Simple Newsletter Signup */}
      {posts.length > 0 && (
        <div className="bg-blue-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay in the Loop
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get the latest insights, tutorials, and updates delivered straight to your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-900 placeholder-gray-500"
              />
              <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300">
                Subscribe
              </button>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              No spam, unsubscribe at any time
            </p>
          </div>
        </div>
      )}
    </div>
  );
} 