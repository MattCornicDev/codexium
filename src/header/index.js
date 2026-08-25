import React, { useState } from "react";
import { Link } from "react-router-dom";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { logotext, socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";
import "./style.css";


const Headermain = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
    document.body.classList.toggle("no-scroll");
  };

  return (
    <>
      <header className="header fixed-top">
        <Link className="brand" to="/">
          <img src={logotext} alt="logo" />
        </Link>

        <nav className="desktop-nav">
          <Link to="/">Accueil</Link>
          <Link to="/packAuditCyber">Pack Audit Cybersécurité</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about">À propos</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/devis">Devis</Link>
          <Link to="/profile">CV</Link>
        </nav>

        <div className="actions">
          <Themetoggle />
          <button
            className={`menu-btn ${open ? "open" : ""}`}
            onClick={toggleMenu}
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <VscClose /> : <VscGrabber />}
          </button>
        </div>
      </header>

      <div id="mobile-menu" className={`mobile-menu ${open ? "open" : ""}`}>
        <div className="mobile-inner">
          <ul>
            <li><Link onClick={toggleMenu} to="/">Accueil</Link></li>
            <li><Link onClick={toggleMenu} to="/packAuditCyber">Pack Audit Cybersécurité</Link></li>
            <li><Link onClick={toggleMenu} to="/portfolio">Portfolio</Link></li>
            <li><Link onClick={toggleMenu} to="/about">À propos</Link></li>
            <li><Link onClick={toggleMenu} to="/contact">Contact</Link></li>
            <li><Link onClick={toggleMenu} to="/articles">Articles</Link></li>
            <li><Link onClick={toggleMenu} to="/devis">Devis</Link></li>
            <li><Link onClick={toggleMenu} to="/profile">CV</Link></li>
          </ul>

          <div className="mobile-footer">
            <a href={socialprofils.facebook} target="_blank">Facebook</a>
            <a href={socialprofils.github} target="_blank">Github</a>
            <a href={socialprofils.twitter} target="_blank">Twitter</a>
            <p>© {new Date().getFullYear()} - {logotext}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headermain;
