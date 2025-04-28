// components
import NavLinks from "./NavLinks";
// icon
import { MdKeyboardArrowDown } from "react-icons/md";
// react
import { useState } from "react";
// react-router-dom
import { Link } from "react-router-dom";
// img
import Logo from "../assets/header/Logo.svg";
import Flag from "../assets/header/flag.svg";

function Navbar() {
  const [arrow, setArrow] = useState(true);
  function setOpenArrow() {
    setArrow((prev) => !prev);
  }

  return (
    <div className="con-align py-[22px] flex  justify-between items-center font-openSans text-[15px]">
      {/* logo */}
      <div>
        <Link to="/">
          <img src={Logo} alt="site logosi" className="w-[239px]" />
        </Link>
      </div>
      {/* nav */}
      <div>
        <ul>
          <NavLinks />
        </ul>
      </div>
      {/* til va  login */}
      <div className="flex  gap-[34px] items-center">
        <div
          className="dropdown dropdown-bottom border-r border-[#76767699] pr-[34px]"
          onClick={setOpenArrow}
        >
          <div
            tabIndex={0}
            role="button"
            className=" p-1 m-1 flex items-center gap-2 "
          >
            <img src={Flag} alt="site logosi" className="w-[29px]" />
            ENG
            {arrow ? (
              <MdKeyboardArrowDown className="  transition-transform duration-300" />
            ) : (
              <MdKeyboardArrowDown className=" rotate-180 transition-transform duration-300" />
            )}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <button className="btn py-[9px] px-[31px] bg-[#009688] text-white hover:bg-[#33b0a4]">
          Sign in
        </button>
      </div>
    </div>
  );
}

export default Navbar;
