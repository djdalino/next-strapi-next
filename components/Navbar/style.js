import styled from "styled-components";
import Link from "next/link";

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
`;
export const NavMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const NavSearch = styled.div`
  display: block;
  input {
    color: #ffffff;
    background-color: #1f2c39;
    border-color: transparent;
    padding: 8px 24px;
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
`;
