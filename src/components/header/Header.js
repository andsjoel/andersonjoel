import { Link } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import ThemeToggle from "../theme/ThemeToggle";

import LogoDark from "../../assets/images/logo/logo-dark.svg";
import LogoLight from "../../assets/images/logo/logo-light.svg";

import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme();

  const logoSrc = theme === "dark" ? LogoLight : LogoDark;

  return (
    <header className="header">

      <Link to="/" className="logo-wrapper" aria-label="Ir para a página inicial">
        <img
          src={logoSrc}
          alt="AJ - Abreviação de Anderson Joel"
          className="logo"
        />
      </Link>

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
        aria-label="Abrir ou fechar menu de navegação"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? "show" : ""}`}
        aria-hidden={!menuOpen}
      >
        <Link to="/" onClick={() => setMenuOpen(false)}>Início</Link>
        <Link to="/sobre" onClick={() => setMenuOpen(false)}>Sobre</Link>
        <Link to="/certificados" onClick={() => setMenuOpen(false)}>Certificados</Link>
        <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>

        <div className="mobile-theme-toggle">
          <ThemeToggle />
        </div>
      </nav>

    </header>
  );
};

export default Header;
