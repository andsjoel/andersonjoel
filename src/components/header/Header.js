import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ThemeToggle from "../theme/ThemeToggle";
import LogoDark from "../../assets/images/logo/logo-dark.svg";
import LogoLight from "../../assets/images/logo/logo-light.svg";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handler = () => {
      const savedTheme = localStorage.getItem("theme") || "light";
      setTheme(savedTheme);
    };

    document.addEventListener("theme-change", handler);

    return () => {
      document.removeEventListener("theme-change", handler);
    };
  }, []);

  const logoSrc = theme === "dark" ? LogoLight : LogoDark;

  return (
    <header className="header">

      <img src={logoSrc} alt="AJ - abreviação de Anderson Joel" className="logo" />

      <nav className="nav desktop-nav">
        <Link to="/">Início</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/certificados">Certificados</Link>
        <Link to="/blog">Blog</Link>
      </nav>

      <ThemeToggle />

      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <Link to="/" onClick={closeMenu}>Início</Link>
        <Link to="/sobre" onClick={closeMenu}>Sobre</Link>
        <Link to="/certificados" onClick={closeMenu}>Certificados</Link>
        <Link to="/blog" onClick={closeMenu}>Blog</Link>

        <div className="mobile-theme-toggle">
          <ThemeToggle />
        </div>
      </nav>

    </header>
  );
};

export default Header;
