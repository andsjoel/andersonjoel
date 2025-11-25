import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";
import "./theme.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={`theme-toggle ${theme}`}
      aria-label="Alternar tema claro/escuro"
      onClick={toggleTheme}
    >
      <span className="icon sun"><FiSun /></span>
      <span className="icon moon"><FiMoon /></span>
    </button>
  );
};

export default ThemeToggle;
