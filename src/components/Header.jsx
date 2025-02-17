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

  useEffect(() => {
    const currentNavItem = navItems.find(
      (item) => `/${item.navLink}` === location.pathname
    );
    if (currentNavItem) {
      setActiveLink(currentNavItem.page);
    }
  }, [location.pathname]);

  return (
    <header className="flex w-full justify-center bg-tint-blue">
      <div className="flex w-full max-w-screen-xl items-center justify-between py-4">
        <Link to="/" onClick={() => setActiveLink(navItems[0]['page'])}>
          <img src="./assets/LogoHeader.png" alt="Logo" />
        </Link>
        <nav className="flex items-center gap-24">
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => setActiveLink(item.page)}
                className={`non-italic cursor-pointer font-poppins text-base font-medium ${
                  activeLink === item.page ? 'text-white' : 'text-sky'
                }`}
              >
                <Link to={`/${item.navLink}`}>{item.page}</Link>
              </li>
            ))}
          </ul>
          <Link
            to="/contact-us"
            onClick={() => setActiveLink('/contact-us')}
            className="rounded-custom-41 border-2 border-greyblue px-12 py-4 font-poppins text-base font-medium text-sky hover:border-white hover:text-white"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
