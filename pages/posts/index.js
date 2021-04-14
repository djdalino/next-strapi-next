import Link from "next/link";

export default function Posts({ posts }) {
  console.log(posts);
  if (!posts) return <p>Loading...</p>;
  return (
    <>
      <h1>This is Posts page</h1>
      {posts.map(post => {
        return (
          <div key={post.id}>
            <img
              src={`https://next-strapi-test.herokuapp.com${post.featured.formats.small.url}`}
            />
            {<br />}
            <h1>{post.title}</h1>
            <p>{post.excerpt}</p>
            <Link href={`/posts/[slug]`} as={`/posts/${post.slug}`}>
              <a>Read more..</a>
            </Link>
          </div>
        );
      })}
    </>
  );
}
export async function getServerSideProps(context) {
  const res = await fetch(`https://next-strapi-test.herokuapp.com/posts`);
  const data = await res.json();

  return {
    props: {
      posts: data
    }
  };
}
