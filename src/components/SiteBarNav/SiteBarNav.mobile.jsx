import { useState, useEffect } from 'react';
import './MobileSidebar.css';

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  const closeMenu = () => {
    setAnimateOut(true);
    setTimeout(() => {
      setOpen(false);
      setAnimateOut(false);
    }, 300); // длительность анимации
  };

  return (
    <>
      <button className="menu-button" onClick={() => setOpen(true)}>
        ☰
      </button>

      {open && (
        <div className="overlay">
          <div className={`sidebar ${animateOut ? 'slide-out' : 'slide-in'}`}>
            <div className="sidebar-header">
              <h2>Меню</h2>
              <button onClick={closeMenu} className="close-button">
                ✕
              </button>
            </div>
            <nav className="sidebar-nav">
              <a href="#">Главная</a>
              <a href="#">О нас</a>
              <a href="#">Контакты</a>
              <a href="#">Вход</a>
            </nav>
          </div>
          <div className="backdrop fade-in" onClick={closeMenu} />
        </div>
      )}
    </>
  );
}
