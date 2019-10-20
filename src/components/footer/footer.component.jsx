import React from "react";

import CategoryMenu from "../category-menu/category-menu.component";

import { ReactComponent as Logo } from "../../assets/logos/siren-logo-dark.svg";
import "./footer.styles.scss";

const Footer = () => (
  <footer className="footer">
    <div className="footer__logo">
      <Logo />
    </div>
    <CategoryMenu />
    <div>
      <p className="footer__credits">
        <span>
          News data API from
          <a href="https://newsapi.org" target="_blank">
            NewsAPI.org
          </a>
        </span>
        <span>
          Design from
          <a
            href="https://freebiesbug.com/sketch-freebies/the-siren/"
            target="_blank"
          >
            The Siren by Kulikov Ilya
          </a>
        </span>
      </p>
      <p className="footer__copyright">
        &copy;2019 The Siren Project. Made with time by
        <a href="https://github.com/joshtru" target="_blank">
          Josh
        </a>
      </p>
    </div>
  </footer>
);
export default Footer;