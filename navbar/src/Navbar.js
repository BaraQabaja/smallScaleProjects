import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";
import "./Navbar.css";
import { NavLink,Link } from "react-router-dom";
const Navbar = () => {
const [dropdownNav,setDropdownNav]=useState(false)
const sideNavHandler=()=>
{
  setDropdownNav(true)
}




  return (
    <nav className='navbar'>
      <div className='container2'>
      <div className='container1'>
      <img src={logo} alt="logo" className="mainLogo"/>

     <button type="button" onClick={()=>setDropdownNav(!dropdownNav)} className='sideNavHandler'> <FaBars/> </button>
     </div>
      <ul className={`${dropdownNav?'list display':'list noDisplay'}`}>
        {links.map((link) => {
          const { id, url, text } = link;

          return (
            <li key={id} className='item'>
              <NavLink
                to={url}
                // className={(navData) =>
                //   navData.isActive ? classes.active : ""
                // }
                 className='link'
              >
                {text}
              </NavLink>
            </li>
          );
        })}
      </ul>
      </div>
      <ul className='social_list'>
        {social.map((social) => {
          const { id, url, icon } = social;

          return (
            <li key={id} className='social_item'>
              <Link
                to={url}
                // className={(navData) =>
                //   navData.isActive ? classes.active : ""
                // }
                 className='link_icon'
              >
                {icon}
              </Link>
            </li>
          );
        })}
      </ul>

    </nav>
  );
};

export default Navbar;
