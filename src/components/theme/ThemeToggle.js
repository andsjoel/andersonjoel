import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import "./theme.css";

const ThemeToggle = () => {
    const [dark, setDark] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "dark";
    });

    useEffect(() => {
        if (dark) {
            document.body.classList.add("dark-theme");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-theme");
            localStorage.setItem("theme", "light");
        }

        document.dispatchEvent(new Event("theme-change"));
    }, [dark]);

    return (
        <button
            className={`theme-toggle ${dark ? "dark" : "light"}`}
            onClick={() => setDark(!dark)}
        >
            <span className="icon sun">
                <FiSun />
            </span>
            <span className="icon moon">
                <FiMoon />
            </span>
        </button>
    );
};

export default ThemeToggle;
