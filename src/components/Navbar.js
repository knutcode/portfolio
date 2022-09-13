import { StyledNav, Logo, NavList, NavListItem, StyledHeader, NavToggle } from "../components-styled/NavbarStyles";
import { useRef, useState } from "react";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const menuToggle = () => {
    setActive(!active);
  };

  const autoClose = () => {
    setActive(false);
  };

  const menu = useRef(null);

  const closeMenu = (e) => {
    if (menu.current && active && !menu.current.contains(e.target)) {
      setActive(false);
    }
  };

  document.addEventListener("mousedown", closeMenu);

  return (
    <StyledHeader ref={menu}>
      <StyledNav>
        <Logo>
          {`<`}
          <Link to="hero" spy={true} smooth={true} offset={-80} duration={700} onClick={autoClose}>
            <span>portfolio</span>
          </Link>
          {`/>`}
        </Logo>
        <NavList active={active}>
          <NavListItem>
            <Link to="hero" spy={true} smooth={true} offset={-80} duration={700} onClick={autoClose}>
              Home
            </Link>
          </NavListItem>

          <NavListItem>
            <Link to="about" spy={true} smooth={true} offset={-35} duration={700} onClick={autoClose}>
              About
            </Link>
          </NavListItem>

          <NavListItem>
            <Link to="projects" spy={true} smooth={true} offset={-28} duration={700} onClick={autoClose}>
              Projects
            </Link>
          </NavListItem>

          <NavListItem>
            <Link to="contact" spy={true} smooth={true} offset={-5} duration={700} onClick={autoClose}>
              Contact
            </Link>
          </NavListItem>
        </NavList>
        <NavToggle active={active} onClick={menuToggle}>
          <span className="lines line--1"></span>
          <span className="lines line--2"></span>
          <span className="lines line--3"></span>
        </NavToggle>
      </StyledNav>
    </StyledHeader>
  );
};

export default Navbar;
