import Link from "next/link";
import {
  Wrapper,
  Container,
  PostImg,
  PostWrapper,
  PostExcerpt,
  PostLinkWrapper,
  SocialMediaWrapper,
  FbIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedInIcon
} from "./style";
export default function Posts({ posts }) {
  const addDefaultPhoto = e => {
    e.target.src =
      "https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail.jpg";
  };
  console.log(posts);
  if (!posts) return <p>Loading...</p>;
  return (
    <Wrapper>
      <Container>
        {posts.map(post => {
          return (
            <section key={post.id}>
              <h1>{post.title}</h1>
              <PostWrapper>
                <PostImg
                  onError={addDefaultPhoto}
                  src={`https://next-strapi-test.herokuapp.com${post.featured.formats.small.url}`}
                  alt={post.title}
                />

                <PostExcerpt>{post.excerpt}</PostExcerpt>
              </PostWrapper>

              <PostLinkWrapper>
                <Link href={`/posts/[slug]`} as={`/posts/${post.slug}`}>
                  <a>Continue reading</a>
                </Link>
              </PostLinkWrapper>
              <SocialMediaWrapper>
                <p>Share this: </p>
                <FbIcon />
                <TwitterIcon />
                <InstagramIcon />
                <LinkedInIcon />
              </SocialMediaWrapper>
              <hr />
            </section>
          );
        })}
      </Container>
    </Wrapper>
  );
}
