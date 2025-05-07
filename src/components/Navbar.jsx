// components
import NavLinks from "./NavLinks";
// icons
import { MdKeyboardArrowDown } from "react-icons/md";
// react
import { useState } from "react";
// react-router-dom
import { Link } from "react-router-dom";
// images
import Logo from "/assets/header/Logo.svg";
import engFlag from "/assets/header/flag.svg";
import uzbFlag from "/assets/header/uzbekistan-flag.jpg";

function Navbar() {
  const [arrow, setArrow] = useState(true);
  const [selectedLang, setSelectedLang] = useState("ENG");

  const flagImage = selectedLang === "ENG" ? engFlag : uzbFlag;

  function toggleArrow() {
    setArrow((prev) => !prev);
  }

  function handleLanguageSelect(lang) {
    setSelectedLang(lang);
    setArrow(true); // optional: yopib qo‘yish
  }

  return (
    <div className="con-align py-[22px] flex justify-between items-center font-openSans text-[15px] font-semibold">
      {/* Logo */}
      <div>
        <Link to="/">
          <img src={Logo} alt="site logosi" className="w-[239px]" />
        </Link>
      </div>

      {/* Nav */}
      <div>
        <ul>
          <NavLinks />
        </ul>
      </div>

      {/* Language & Login */}
      <div className="flex gap-[34px] items-center ">
        {/* Language dropdown */}
        <div
          className="dropdown dropdown-bottom border-r border-[#76767699] pr-[24px]  w-34 "
          onClick={toggleArrow}
        >
          <div
            tabIndex={0}
            role="button"
            className="p-1 m-1 flex items-center gap-2  w-[100px]"
          >
            <img src={flagImage} alt="flag" className="w-[29px]" />
            {selectedLang}
            <MdKeyboardArrowDown
              className={`transition-transform duration-300 ${
                arrow ? "" : "rotate-180"
              }`}
            />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow "
          >
            <li onClick={() => handleLanguageSelect("ENG")}>
              <div className="flex justify-between items-center gap-2 cursor-pointer">
                <p>ENG</p>
                <img src={engFlag} alt="English flag" className="w-[25px]" />
              </div>
            </li>
            <li onClick={() => handleLanguageSelect("UZB")}>
              <div className="flex justify-between items-center gap-2 cursor-pointer">
                <p>UZB</p>
                <img src={uzbFlag} alt="Uzbek flag" className="w-[25px]" />
              </div>
            </li>
          </ul>
        </div>
        {/* Login Button */}
        <button className="btn py-[9px] px-[31px] bg-[#009688] text-white hover:bg-[#33b0a4] rounded-[8px] ">
          Sign in
        </button>
      </div>
    </div>
  );
}

export default Navbar;
