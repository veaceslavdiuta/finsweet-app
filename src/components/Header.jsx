import { useState } from 'react';

function Header() {
  const [activeLink, setActiveLink] = useState('Home');

  const navItems = ['Home', 'About Us', 'Features', 'Pricing', 'FAQ', 'Blog'];

  return (
    <header className="flex w-full justify-center bg-tint-blue">
      <div className="flex w-full max-w-screen-xl items-center justify-between py-4">
        <img src="./assets/LogoHeader.png" alt="Logo" />
        <nav className="flex items-center gap-24">
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li
                key={item}
                onClick={() => setActiveLink(item)}
                className={`non-italic cursor-pointer font-poppins text-base font-medium ${
                  activeLink === item ? 'text-white' : 'text-sky'
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
          <button className="rounded-custom-41 border-2 border-greyblue px-12 py-4 font-poppins text-base font-medium text-sky hover:border-white hover:text-white">
            Contact Us
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
