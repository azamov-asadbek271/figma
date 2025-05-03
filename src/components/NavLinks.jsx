import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

const links = [
  {
    id: 1,
    text: "Home",
    link: "/",
  },
  {
    id: 2,
    text: "Programs",
    link: "/programs",
    dropdown: [
      {
        id: 21,
        text: "International educational programs",
        link: "/programs/international",
      },
      { id: 22, text: "Specialized courses", link: "/programs/specialized" },
      {
        id: 23,
        text: "Islamic Finance Literacy Course",
        link: "/programs/finance-literacy",
      },
      {
        id: 24,
        text: "Certification program",
        link: "/programs/certification",
      },
    ],
  },
  {
    id: 3,
    text: "Finance Tools",
    link: "/financeTools",
  },
  {
    id: 4,
    text: "Contact",
    link: "/contact",
  },
];

function NavLinks() {
  const [openDropdownId, setOpenDropdownId] = useState(null);

  const toggleDropdown = (id) => {
    if (openDropdownId === id) {
      setOpenDropdownId(null);
    } else {
      setOpenDropdownId(id);
    }
  };

  return (
    <ul className="flex gap-8 text-[#686868] font-openSans font-semibold">
      {links.map((link) => (
        <li key={link.id} className="relative list-none ">
          {/* Agar dropdown bo'lsa */}
          {link.dropdown ? (
            <button
              onClick={() => toggleDropdown(link.id)}
              className="capitalize focus:outline-none flex items-center gap-1 hover:text-[#009688] transition duration-300"
            >
              {link.text}
              <MdKeyboardArrowDown
                className={`transform transition-transform duration-300 ${
                  openDropdownId === link.id ? "rotate-180" : ""
                }`}
              />
            </button>
          ) : (
            <NavLink
              to={link.link}
              className="capitalize hover:text-[#009688] transition duration-300"
            >
              {link.text}
            </NavLink>
          )}

          {/* Dropdown ochilsa */}
          {link.dropdown && openDropdownId === link.id && (
            <ul className="absolute top-full left-0 mt-2 w-72 bg-white  shadow-md rounded-md py-2 z-10 px-2 border  ">
              {link.dropdown.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      `block px-4 py-2 capitalize hover:text-[#009688] transition duration-300 border-b-2 `
                    }
                    onClick={() => setOpenDropdownId(null)}
                  >
                    {item.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;
