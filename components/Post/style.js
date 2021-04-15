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
`;

export const PostImg = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  text-align: center;
  margin: auto;
`;

export const PostWrapper = styled.div`
  display: flex;
  padding: 0 60px;
`;
export const PostContent = styled.div`
  padding: 20px 20px 0 20px;
  font-size: 20px;
  line-height: 26px;
  @media screen and (max-width: 500px) {
    padding: 20px 0 0 0;
    font-size: 16px;
  }
`;
