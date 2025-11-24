import { Link } from "react-router-dom";
import ThemeToggle from "../theme/ThemeToggle";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">AJCS</div>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/test">Test</Link>
      </nav>

      <ThemeToggle />
    </header>
  );
}

export default Header;