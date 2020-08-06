import PostPreview from "./post-preview";

export default function Posts({ posts }) {
  return (
    <>
      {posts.map((post, i) => (
        <PostPreview
          index={i}
          key={post.slug}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          slug={post.slug}
          excerpt={post.excerpt}
        />
      ))}
    </>
  );
}
