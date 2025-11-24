import { useEffect, useState } from "react";
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
            localStorage.setItem("theme", "light")
        }
    }, [dark]);

    return(
        <button
            className="theme-toggle"
            onClick={() => setDark(!dark)}
        >
            {dark ? "Claro" : "Escuro"}
        </button>
    )
}

export default ThemeToggle;
