import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { AppContext } from "store.js";

import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";

import logo from "../../images/Logo_02.png";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import { ReactComponent as UserIcon } from "images/user-solid.svg";
import { SigningCosmosClient } from "@cosmjs/launchpad";
import axios from "axios";


const Header = tw.header`
  flex justify-between items-center
  mx-auto fixed bg-white z-20 w-screen h-20 top-0 left-0 p-10
  shadow
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
  props.value ? `display: block;` : `display: none;`,
]);
const DropdownMenuLogout = styled.ul(props => [
  `
    background-color: #fff;
    list-style: none;
    position: absolute;
    display: none;
    top: 100%;
    z-index: 1;
    background-color: #fff;
    padding: 0;
    margin: 0;
    list-style: none;
    border: 1px solid #ccc;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    transform: translateX(70px);
    min-width: 60%;`,
  props.value ? `display: block;` : `display: none;`,
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
  const [showlogout, setShowlogout] = useState(false);

  const handleMouseEnter = () => {
    setShowMenu(true);
  };
  const onClickTruyNow = async (e) => {
    e.preventDefault();
    if (!window.keplr) {
      alert("Please install keplr extension");
    }
    else {
      const chainId = "cosmoshub-4";

      // Enabling before using the Keplr is recommended.
      // This method will ask the user whether to allow access if they haven't visited this website.
      // Also, it will request that the user unlock the wallet if the wallet is locked.
      await window.keplr.enable(chainId);

      const offlineSigner = window.keplr.getOfflineSigner(chainId);

      // You can get the address/public keys by `getAccounts` method.
      // It can return the array of address/public key.
      // But, currently, Keplr extension manages only one address/public key pair.
      // XXX: This line is needed to set the sender address for SigningCosmosClient.
      const accounts = await offlineSigner.getAccounts();

      // Initialize the gaia api with the offline signer that is injected by Keplr extension.
      const _ = new SigningCosmosClient(
        "https://lcd-cosmoshub.keplr.app",
        accounts[0].address,
        offlineSigner,
      );
      const name = await window.keplr.getKey(chainId)
      // console.log(name)
      // const datareq = {
      //   name: name.name,
      //   bech32Address: name.bech32Address,
      //   algo: name.algo
      // }
      // console.log(name)
      // const data_req = {
      //   id: name.bech32Address,

      // }
      const id = name.bech32Address

      axios.get(`http://localhost:8010/user/check?id=${id}`)
        .then(response => {
          console.log(response)
          if (response.data.is_exist) {
            data.user.set(name.name)
            data.signin.set(true)
          }
          else {
            const data_create = {
              id: name.bech32Address,
              owallet_response: name,
              metadata: {},
              user_resource: {},
              configs: {}
            }
            axios.post(`http://localhost:8010/user/create`, data_create)
              .then((response) => {

                console.log(response)
                data.user.set(name.name)
                data.signin.set(true)

              }).catch((err) => {
                console.log("ERROR", err)
              })
          }
        }).catch(err => {
          console.log("ERROR", err)
        })

      // console.log(datareq)
      // axios.post("http://localhost:3001/user/getuser", datareq
      // ).then((response) => {
      //   console.log(response)
      //   if (response.data == "User is not existed") {
      //     // alert("Bạn chưa đăng kí")
      //     // data.user.set(name.name)
      //     // data.signin.set(true)
      //     axios.post("http://localhost:3001/user", datareq
      //     ).then((response) => {
      //       console.log(response)
      //       if (response.data.message == "Folder existed") {
      //         alert("ERROR")
      //       }
      //       else {
      //         data.user.set(name.name)
      //         data.signin.set(true)
      //       }
      //     }).catch((err) => {
      //       console.log("ERROR", err)
      //     })

      //   }
      //   else {
      //     data.user.set(name.name)
      //     data.signin.set(true)
      //     // history("/")
      //   }

      // }).catch((err) => {
      //   console.log("ERROR", err)
      // })
    }
  }

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

      <Link>
        <NavLink href="/#">Contact Us</NavLink>
      </Link>

      <Link onClick={onClickTruyNow}>
        <PrimaryLink css={roundedHeaderButton && tw`rounded-full`} >Try now</PrimaryLink>
      </Link>
    </NavLinks>
  ];
  const defaultLinkstrue = [<NavLinks key={1}>
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

    <DropdownContainer onMouseEnter={() => setShowlogout(true)} onMouseLeave={() => setShowlogout(false)}>
      <DropdownButton>
        <Link to="/user">
          <NavLink tw="flex items-center lg:ml-12!">
            <UserIcon tw="w-6 h-6 lg:mr-2 border border-solid border-gray-500 rounded-full p-1"></UserIcon>
            {data.user.status}
          </NavLink>
        </Link>
      </DropdownButton>
      <DropdownMenuLogout value={showlogout}>
        <DropdownItem onClick={(e) => data.signin.set(false)}>
          <Link to="/login">Logout</Link>
        </DropdownItem>
      </DropdownMenuLogout>
    </DropdownContainer>
  </NavLinks>
  ]

  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];

  const defaultLogoLink = (
    <LogoLink href="/">
      <img src={logo} alt="logo" />
      SLearn
    </LogoLink>
  );

  logoLink = logoLink || defaultLogoLink;
  links = links || (!data.signin.status) ? defaultLinks : defaultLinkstrue;

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
