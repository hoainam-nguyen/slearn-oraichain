import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";

import logo from "../../images/logo.svg";
import { AppContext } from "store.js";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import { ReactComponent as UserIcon } from "images/user-solid.svg";


const Header = tw.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto
`;

export const NavLinks = tw.div`flex`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
export const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-10 mr-3`}
  }
`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;
export const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`;
export const MobileNavLinks = motion(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

const DropdownContainer = tw.div`
  relative
  inline-block
`;

const DropdownMenu = styled.ul(props => [
  `
  background-color: #fff;
  list-style: none;
  position: absolute;
  display: none;
  top: 100%;
  left: 0;
  z-index: 1;
  background-color: #fff;
  padding: 0;
  margin: 0;
  list-style: none;
  border: 1px solid #ccc;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  min-width: 120%;`,
  props.value?`display: block;`:`display: none;`,
  ]);

const DropdownButton = styled.button`
   ${tw`text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent`}
  `;

const DropdownItem = tw.li`
  px-4
  py-2
  hover:bg-gray-200
  cursor-pointer
  rounded-lg
`;

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`;

export default ({ roundedHeaderButton = false, logoLink, links, className, collapseBreakpointClass = "lg" }) => {
  /*
   * This header component accepts an optionals "links" prop that specifies the links to render in the navbar.
   * This links props should be an array of "NavLinks" components which is exported from this file.
   * Each "NavLinks" component can contain any amount of "NavLink" component, also exported from this file.
   * This allows this Header to be multi column.
   * So If you pass only a single item in the array with only one NavLinks component as root, you will get 2 column header.
   * Left part will be LogoLink, and the right part will be the the NavLinks component you
   * supplied.
   * Similarly if you pass 2 items in the links array, then you will get 3 columns, the left will be "LogoLink", the center will be the first "NavLinks" component in the array and the right will be the second "NavLinks" component in the links array.
   * You can also choose to directly modify the links here by not passing any links from the parent component and
   * changing the defaultLinks variable below below.
   * If you manipulate links here, all the styling on the links is already done for you. If you pass links yourself though, you are responsible for styling the links or use the helper styled components that are defined here (NavLink)
   */
  const data = useContext(AppContext)
  const [showMenu, setShowMenu] = useState(false);

  const handleMouseEnter = () => {
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMenu(false);
  };

  const defaultLinks = [
    <NavLinks key={1}>
      <Link to="/about">
        <NavLink>About</NavLink>
      </Link>

      <DropdownContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <DropdownButton>Solutions</DropdownButton>
          <DropdownMenu value={showMenu}>
          <DropdownItem>Item 1</DropdownItem>
          <DropdownItem>Item 2</DropdownItem>
          <DropdownItem>Item 3</DropdownItem>
        </DropdownMenu>
      </DropdownContainer>

      <Link to='/pricing'>
        <NavLink >Pricing</NavLink>
      </Link>

      <NavLink href="/#">Contact Us</NavLink>

      <Link to="/login">
        <NavLink tw="lg:ml-12!">
          Login
        </NavLink>
      </Link>
      <Link to="/signup">
        <PrimaryLink css={roundedHeaderButton && tw`rounded-full`} >Sign Up</PrimaryLink>
      </Link>
    </NavLinks>
  ];
  const defaultLinkstrue =  [<NavLinks key={1}>
  <Link to="/about">
    <NavLink>About</NavLink>
  </Link>

  <DropdownContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <DropdownButton>Solutions</DropdownButton>
    <DropdownMenu value={showMenu}>
          <DropdownItem>
            <Link to="/forum">Forums</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/blog">Blogs</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/chatbot/language/LanguageGPT">Bot Chat</Link>
          </DropdownItem>
    </DropdownMenu>
  </DropdownContainer>

  <Link to='/pricing'>
    <NavLink >Pricing</NavLink>
  </Link>
  <Link>
    <NavLink >Contact Us</NavLink>
  </Link>

  <Link to="/user">
    <NavLink tw="flex items-center lg:ml-12!">
    <UserIcon tw="w-6 h-6 lg:mr-2 border border-solid border-gray-500 rounded-full p-1"></UserIcon>
      Đỗ Văn Tiến
    </NavLink>
  </Link>
</NavLinks>
  ]

  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];

  const defaultLogoLink = (
    <LogoLink href="/">
      <img src={logo} alt="logo" />
      Treact
    </LogoLink>
  );

  logoLink = logoLink || defaultLogoLink;
  links = links || (data.signin.status)? defaultLinks:defaultLinkstrue;

  return (
    <Header className={className || "header-light"}>
        <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
          {logoLink}
          {links}
        </DesktopNavLinks>

      <MobileNavLinksContainer css={collapseBreakpointCss.mobileNavLinksContainer}>
        {logoLink}
        <MobileNavLinks initial={{ x: "150%", display: "none" }} animate={animation} css={collapseBreakpointCss.mobileNavLinks}>
          {links}
        </MobileNavLinks>
        <NavToggle onClick={toggleNavbar} className={showNavLinks ? "open" : "closed"}>
          {showNavLinks ? <CloseIcon tw="w-6 h-6" /> : <MenuIcon tw="w-6 h-6" />}
        </NavToggle>
      </MobileNavLinksContainer>
    </Header>
  );
};

/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  }
};
