import React, { useEffect, useState } from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";
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
      <label className="label">
        <div className="toggle" >
          <input className="toggle-state" type="checkbox" name="check" value="check" onClick={themetoggle} />
          <div className="indicator"></div>
        </div>
      </label>
    </>

  );
};

export default Themetoggle;
