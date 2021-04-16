import {
  Wrapper,
  Container,
  NavMenu,
  Navlinks,
  NavLogo,
  NavMenuWrapper,
  NavSearch,
  NavMenuBarLogo
} from "../Navbar/style";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 500) {
        setShow(false);
      }
    }
    window.addEventListener("resize", handleResize);
  }, []);

  const handleShowMenu = () => {
    setShow(!show);
  };

  return (
    <Wrapper>
      <Container>
        <NavLogo>
          <Link href="/">
            <a>Natura</a>
          </Link>
        </NavLogo>
        <NavMenuWrapper show={show}>
          <NavMenu>
            <li onClick={() => handleShowMenu()}>
              <Navlinks href="/">
                <a>Home</a>
              </Navlinks>
            </li>
            <li onClick={() => handleShowMenu()}>
              <Navlinks href="/about">
                <a>About</a>
              </Navlinks>
            </li>
            <li onClick={() => handleShowMenu()}>
              <Navlinks href="/contact">
                <a>Contact</a>
              </Navlinks>
            </li>
          </NavMenu>
          <NavSearch>
            <input type="text" placeholder="Seacrch.." />
          </NavSearch>
        </NavMenuWrapper>
        <NavMenuBarLogo onClick={() => handleShowMenu()} />
      </Container>
    </Wrapper>
  );
};

export default Navbar;
