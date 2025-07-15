'use client';

import { useState, useEffect } from 'react';
import { getContentType, getContentTypeById } from '../lib/strapi';

export default function StrapiExample() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      // Example: Fetch blog posts from Strapi
      // Replace 'posts' with your actual content type name
      const response = await getContentType('posts', {
        populate: '*',
        pagination: {
          page: 1,
          pageSize: 10
        },
        sort: ['createdAt:desc']
      });
      
      setPosts(response.data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading posts...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="strapi-example">
      <h2>Posts from Strapi</h2>
      {posts.length === 0 ? (
        <p>No posts found. Make sure your Strapi instance is running and has content.</p>
      ) : (
        <div className="posts-grid">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              <h3>{post.attributes?.title}</h3>
              <p>{post.attributes?.description}</p>
              {post.attributes?.image?.data && (
                <img 
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${post.attributes.image.data.attributes.url}`}
                  alt={post.attributes.title}
                  className="post-image"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 