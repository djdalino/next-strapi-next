import Link from "next/link";
import {
  Wrapper,
  Container,
  PostImg,
  PostWrapper,
  PostContent,
  PostLinkWrapper,
  SocialMediaWrapper,
  FbIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedInIcon
} from "./style";
export default function Post({ post }) {
  const addDefaultPhoto = e => {
    e.target.src =
      "https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail.jpg";
  };
  if (!post) return <p>Loading...</p>;
  return (
    <Wrapper>
      <Container>
        <h1>{post.title}</h1>
        <PostImg
          onError={addDefaultPhoto}
          src={`https://next-strapi-test.herokuapp.com${post.featured.formats.large.url}`}
          alt={post.title}
        />

        <PostContent dangerouslySetInnerHTML={{ __html: post.content }} />
      </Container>
    </Wrapper>
  );
}
