import SinglePost from "../../components/Post";

export default function Post({ post }) {
  if (!post) return <p>Loading...</p>;
  // const Image = `http://localhost:1337/`
  return (
    <SinglePost post={post} />
    // <div>
    //   <h1>{post.title}</h1>
    //   <img
    //     src={`https://next-strapi-test.herokuapp.com${post.featured.formats.large.url}`}
    //   />

    //   <div dangerouslySetInnerHTML={{ __html: post.content }} />
    // </div>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const res = await fetch(
    `https://next-strapi-test.herokuapp.com/posts?slug=${slug}`
  );
  const data = await res.json();

  const posts = data.map(post => post);
  return {
    props: {
      post: posts[0]
    }
  };
}
