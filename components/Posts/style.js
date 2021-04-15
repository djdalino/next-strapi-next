import styled, { css } from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Wrapper = styled.section`
  width: 100%;
  margin: 0;
  padding: 0 20px;
  color: #6b8095;
`;
export const Container = styled.div`
  padding: 40px 0;
  background-color: #ffffff;
  max-width: 1068px;
  display: flex;
  flex-direction: column;
  margin: auto;
  h1 {
    font-size: 48px;
    text-align: center;
    font-weight: 800;
    margin-bottom: 40px;
    color: #2c3e50;
  }
  h2 {
    text-align: center;
    font-weight: 400;
  }

  @media screen and (max-width: 500px) {
    h1 {
      font-size: 36px;
    }
  }
`;

export const PostImg = styled.img`
  width: 200px;
  height: auto;
`;

export const PostWrapper = styled.div`
  display: flex;
  padding: 0 60px;
  @media screen and (max-width: 500px) {
    padding: 0;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
export const PostExcerpt = styled.div`
  padding: 0 20px;
  font-size: 20px;
  line-height: 26px;
  @media screen and (max-width: 500px) {
    margin-top: 20px;
    font-size: 16px;
  }
`;

export const PostLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 20px 0;

  a {
    padding: 8px 24px;
    background-color: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 18px;
  }
`;

const SocialMedia = css`
  display: block;
  font-size: 36px;
  margin: 0 10px;
  color: #1abc9c;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

export const FbIcon = styled(FaFacebook)`
  ${SocialMedia}
`;
export const TwitterIcon = styled(FaTwitter)`
  ${SocialMedia}
`;
export const InstagramIcon = styled(FaInstagram)`
  ${SocialMedia}
`;

export const LinkedInIcon = styled(FaLinkedin)`
  ${SocialMedia}
`;
