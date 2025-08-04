import React, { useState, useEffect } from 'react';
import s from './Header.module.scss';
import { useMediaQuery } from 'react-responsive';
import SideBar from '../SideBar/SideBar';

const Header: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isMobile = useMediaQuery({ maxWidth: 1151 });
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (sidebarOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [sidebarOpen, isMobile]);

  const navItems = [
    { text: 'Hotels', href: '#' },
    { text: 'Extension', href: '#' },
    { text: 'Press', href: '#' },
    { text: 'Blog', href: '#' },
  ];

  if (!mounted) {
    return (
      <header className={s.header}>
        <div className={s.container}>
          <a className={s.logo} href="#">
            <img alt="RatePunk Logo" loading="lazy" width="125" height="32" src="images/logo.svg" />
          </a>
          <div className={s.navItems}>
            {navItems.map(item => (
              <a key={item.text} className={s.navAnchor} href={item.href}>
                <div className={s.navLink}>
                  <span className={s.navText}>{item.text}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className={s.header}>
      <div className={s.container}>
        <a className={s.logo} href="#">
          <img alt="RatePunk Logo" loading="lazy" width="125" height="32" src="images/logo.svg" />
        </a>
        {!isMobile && (
          <div className={s.navItems}>
            {navItems.map(item => (
              <a key={item.text} className={s.navAnchor} href={item.href}>
                <div className={s.navLink}>
                  <span className={s.navText}>{item.text}</span>
                </div>
              </a>
            ))}
          </div>
        )}
        {isMobile && (
          <button
            className={`${s.burger} ${sidebarOpen ? s.burgerOpen : ''}`}
            aria-label={sidebarOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setSidebarOpen(open => !open)}
          >
            <span className={s.burgerIcon}>
              <span />
              <span />
              <span />
            </span>
          </button>
        )}
      </div>
      {isMobile && sidebarOpen && (
        <div className={s.mobileSidebarOverlay}>
          <div className={s.mobileSidebar}>
            <SideBar isMobile={true} onNavigate={() => setSidebarOpen(false)} />
          </div>
          <div className={s.mobileSidebarBackdrop} onClick={() => setSidebarOpen(false)} />
        </div>
      )}
    </header>
  );
};

export default Header;
