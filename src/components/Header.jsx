import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { id: 1, page: 'Home', navLink: '' },
  { id: 2, page: 'About Us', navLink: 'about-us' },
  { id: 3, page: 'Features', navLink: 'features' },
  { id: 4, page: 'Pricing', navLink: 'pricing' },
  { id: 5, page: 'Portfolio', navLink: 'portfolio' },
  { id: 6, page: 'Blog', navLink: 'blog' },
];

function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const currentNavItem = navItems.find(
      (item) => `/${item.navLink}` === location.pathname
    );
    if (currentNavItem) {
      setActiveLink(currentNavItem.page);
    }
  }, [location.pathname]);

  return (
    <header className="w-full bg-tint-blue">
      <div className="container mx-auto flex max-w-screen-xl items-center justify-between px-8 py-4 xl:px-0">
        <Link to="/" onClick={() => setActiveLink(navItems[0]['page'])}>
          <img src="./assets/LogoHeader.png" alt="Logo" />
        </Link>
        <nav
          className={`absolute left-0 top-14 z-10 ${menuOpen ? 'flex' : 'hidden'} w-full justify-center bg-tint-blue px-12 py-4 shadow-md lg:static lg:flex lg:w-auto lg:items-center lg:gap-8 lg:p-0 lg:shadow-none`}
        >
          <ul className="flex flex-col items-center gap-4 lg:flex-row lg:gap-8">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`non-italic cursor-pointer font-poppins text-base font-medium ${
                  activeLink === item.page ? 'text-white' : 'text-sky'
                }`}
              >
                <Link
                  to={`/${item.navLink}`}
                  onClick={() => {
                    setActiveLink(item.page);
                    setMenuOpen(false);
                  }}
                >
                  {item.page}
                </Link>
              </li>
            ))}
            <Link
              to="/contact-us"
              onClick={() => {
                setActiveLink('/contact-us');
                setMenuOpen(false);
              }}
              className="block rounded-custom-41 border-2 border-greyblue px-12 py-4 text-center font-poppins text-base font-medium text-sky transition-all duration-200 hover:border-white hover:text-white"
            >
              Contact Us
            </Link>
          </ul>
        </nav>
        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
