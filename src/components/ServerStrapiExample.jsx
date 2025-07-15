import { getServerContentType } from '../lib/strapi-server';

export default async function ServerStrapiExample() {
  try {
    const posts = await getServerContentType('posts', {
      populate: '*',
      pagination: { page: 1, pageSize: 5 },
      sort: ['createdAt:desc']
    });

    return (
      <div className="server-strapi-example">
        <h2>Server-Side Posts from Strapi</h2>
        {posts.data?.length > 0 ? (
          <div className="posts-grid">
            {posts.data.map((post) => (
              <div key={post.id} className="post-card">
                <h3>{post.attributes?.title}</h3>
                <p>{post.attributes?.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No posts found</p>
        )}
      </div>
    );
  } catch (error) {
    return <div>Error loading posts: {error.message}</div>;
  }
} 