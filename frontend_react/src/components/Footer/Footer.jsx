import React from "react";
import "./Footer.scss";
import { easeOut, motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="app__footer">
      <div className="app__footer-copyright">
        <p className="p-text">@2025 Ken Genesius</p>
        <p className="p-text">All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
