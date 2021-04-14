import {
  Wrapper,
  Container,
  NavMenu,
  Navlinks,
  NavLogo,
  NavMenuWrapper,
  NavSearch
} from "../Navbar/style";
import Link from "next/link";
const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <NavLogo>
          <Link href="/">
            <a>Natura</a>
          </Link>
        </NavLogo>
        <NavMenuWrapper>
          <NavMenu>
            <li>
              <Navlinks href="/">
                <a>Home</a>
              </Navlinks>
            </li>
            <li>
              <Navlinks href="/about">
                <a>About</a>
              </Navlinks>
            </li>
            <li>
              <Navlinks href="/posts">
                <a>Contact</a>
              </Navlinks>
            </li>
          </NavMenu>
          <NavSearch>
            <input type="text" placeholder="Seacrch.." />
          </NavSearch>
        </NavMenuWrapper>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
