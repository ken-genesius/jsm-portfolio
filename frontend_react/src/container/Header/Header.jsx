import React, { useEffect, useState } from "react";
import { easeInOut, motion } from "framer-motion";
import { images } from "../../constants";
import { FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { urlFor, client } from "../../client";
import "./Header.scss";

import { AppWrap } from "../../wrapper";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "headerSkills"] | order(order asc)';

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span className="wave-hand">👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Ken Genesius</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Software Engineer</p>
            <p className="p-text">Team Lead</p>
            <p className="p-text">Project Manager</p>
          </div>
          <div className="button-cmp app__flex">
            <a
              className="linkedin-cmp"
              target="_blank"
              href="https://linkedin.com/in/ken-genesius/"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              className="cv-cmp"
              target="_blank"
              href="https://drive.google.com/drive/folders/1oyH9WMPCAIhvwrGZI08i2KSlT5eTe6Hl?usp=sharing"
            >
              <TbFileCv /> Download CV
            </a>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <motion.img
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.hero_full}
          alt="profile_bg"
        />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        <div className="circle-div">
          {skills.map((skill, index) => (
            <div
              className="circle-cmp app__flex"
              style={{ backgroundColor: skill.bgColor }}
              key={`circle-${index}`}
            >
              <img src={urlFor(skill.icon)} alt="top-skills" />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
