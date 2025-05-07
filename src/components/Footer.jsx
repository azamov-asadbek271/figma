// img
import logoFooter from "/assets/footer/logo-footer.png";
// react-router-dom
import { Link } from "react-router-dom";
// icon
import { FaYoutube } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <div className="bg-[#009688] py-[38px] px-[130px] font-openSans">
      <div className="con-align flex flex-col items-center justfiy-center gap-[35px]">
        <img src={logoFooter} alt="" className="w-[140px]" />
        <div>
          <ul className="text-[#fff] flex items-center gap-[48px] ">
            <li>
              <Link
                className="hover:text-[#000] transition duration-300"
                to="/home"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[#000] transition duration-300"
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[#000] transition duration-300"
                to="/service"
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[#000] transition duration-300"
                to="/contact"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        {/* icon */}

        <div className="flex gap-[16px]">
          <FaYoutube className="w-[20px] h-[20px] text-[#fff]" />
          <ImFacebook className="w-[20px] h-[20px] text-[#fff]" />
          <FaTwitter className="w-[20px] h-[20px] text-[#fff]" />
          <FaInstagram className="w-[20px] h-[20px] text-[#fff]" />
        </div>
        <div className="border-t border-[#fff] w-full pt-[48px] text-center text-[#CFD3D7]">
          <p>Copyright Satyam Studio</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
