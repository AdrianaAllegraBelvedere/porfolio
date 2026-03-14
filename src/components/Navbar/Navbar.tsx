import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="navbarContainer">
        <a href="#hero" className="navbarBrand" onClick={closeMenu}>
          ADRIANA ALLEGRA
        </a>

        <button
          className={`navbarToggle ${isOpen ? "navbarToggleHidden" : ""}`}
          onClick={openMenu}
          aria-label="Abrir menú"
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className="navbarDesktop">
          <a href="#about" className="navbarDesktopLink">Sobre mí</a>
          <a href="#education" className="navbarDesktopLink">Formación</a>
          <a href="#experience" className="navbarDesktopLink">Experiencia</a>
          <a href="#projects" className="navbarDesktopLink">Proyectos</a>
          <a href="#contact" className="navbarDesktopLink">Contacto</a>
        </nav>
      </div>

      <div
        className={`navbarOverlay ${isOpen ? "navbarOverlayOpen" : ""}`}
        onClick={closeMenu}
      />

      <nav className={`navbarMenu ${isOpen ? "navbarMenuOpen" : ""}`}>
        <button
          className="navbarClose"
          onClick={closeMenu}
          aria-label="Cerrar menú"
          type="button"
        >
          ×
        </button>

        <a href="#about" className="navbarLink" onClick={closeMenu}>Sobre mí</a>
        <a href="#education" className="navbarLink" onClick={closeMenu}>Formación</a>
        <a href="#experience" className="navbarLink" onClick={closeMenu}>Experiencia</a>
        <a href="#projects" className="navbarLink" onClick={closeMenu}>Proyectos</a>
        <a href="#contact" className="navbarLink" onClick={closeMenu}>Contacto</a>
      </nav>
    </header>
  );
}

export default Navbar;