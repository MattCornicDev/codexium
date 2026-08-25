import React, { useEffect, useState } from "react";
import './style.css'


const Themetoggle = () => {
  const [theme, settheme] = useState(localStorage.getItem("theme"));
  const themetoggle = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <>
      <label className="label" aria-label="Changer de thème">
        <div className="toggle">
          <input
            className="toggle-state"
            type="checkbox"
            name="theme"
            checked={theme === "dark"}
            onChange={themetoggle}
            aria-label="Activer le mode sombre"
          />
          <div className="indicator"></div>
        </div>
      </label>
    </>

  );
};

export default Themetoggle;
