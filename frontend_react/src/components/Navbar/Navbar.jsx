import React, { useState } from "react";
import "./Navbar.scss";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { easeOut, motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const sliderVariants = {
    initial: {
      x: "0%",
    },
    animate: {
      x: "-110%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 25,
        delay: 1,
      },
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="/" title="Ken Genesius" className={"app__navbar-name-link"}>
          <p className={"app__navbar-name"}>
            Ken <span>Genesius</span>
          </p>
          <motion.div
            className="app__navbar-sliding-text"
            variants={sliderVariants}
            initial="initial"
            animate="animate"
          >
            Software Developer | Team Leader | Project Manager
          </motion.div>
        </a>
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: easeOut }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
