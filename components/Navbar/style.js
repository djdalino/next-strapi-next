import styled from "styled-components";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
export const Wrapper = styled.nav`
  width: 100%;
  margin: 0;
  padding: 20px 20px;
  background-color: #2c3e50;
  color: #ffffff;
`;
export const Container = styled.div`
  max-width: 1068px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  position: relative;
`;
export const NavMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 768px) {
    display: ${({ show }) => (show ? "flex" : "none")};
    flex-direction: column;
    height: 100vh;
    position: fixed;
    background: black;
    top: 0;
    left: 0;
    padding: 0;
  }
`;
export const NavSearch = styled.div`
  display: block;
  input {
    color: #ffffff;
    background-color: #1f2c39;
    border-color: transparent;
    padding: 8px 24px;
  }
  @media screen and (max-width: 768px) {
    margin: auto;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  li {
    list-style-type: none;
    margin: 0 20px 0 0;
    &:hover {
      transform: scale(1.05);
    }
  }

  @media screen and (max-width: 768px) {
    display: ${({ show }) => (show ? "flex" : "flex")};
    flex-direction: column;
    justify-content: space-around;
    height: 90vh;
  }
`;

export const Navlinks = styled(Link)`
  text-decoration: none;

  a {
    text-decoration: none;
  }
`;

export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  a {
    font-size: 36px;
    font-weight: 800;
  }
  @media screen and (max-width: 500px) {
    margin: auto;
  }
`;

export const NavMenuBarLogo = styled(FaBars)`
  position: absolute;
  display: none;
  top: 0;
  right: 0;
  margin: 5px 5px 0 0;
  font-size: 30px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
