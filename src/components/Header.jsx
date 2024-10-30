import { useState } from "react";

function Header() {
  const [activeLink, setActiveLink] = useState("Home");

  const navItems = ["Home", "About Us", "Features", "Pricing", "FAQ", "Blog"];

  return (
    <div className="w-full flex justify-center bg-tint-blue">
      <div className="max-w-screen-xl w-full flex justify-between items-center py-4">
        <img src="./assets/LogoHeader.png" alt="Logo" />
        <nav className="flex items-center gap-24">
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li
                key={item}
                onClick={() => setActiveLink(item)}
                className={`font-poppins text-base non-italic font-medium cursor-pointer ${
                  activeLink === item ? "text-white" : "text-sky"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
          <button className="font-poppins text-base font-medium text-sky hover:text-white py-4 px-12 border-2 border-greyblue rounded-custom-41 hover:border-white">
            Contact Us
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Header;
