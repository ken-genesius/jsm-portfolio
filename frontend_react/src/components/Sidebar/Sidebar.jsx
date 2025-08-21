import "./Sidebar.scss";
import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { MdMail } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="app__sidebar">
      <div>
        <a
          target="_blank"
          href="https://drive.google.com/drive/folders/1oyH9WMPCAIhvwrGZI08i2KSlT5eTe6Hl?usp=sharing"
        >
          <TbFileCv />
        </a>
      </div>
      <div>
        <a target="_blank" href="https://linkedin.com/in/ken-genesius/">
          <FaLinkedin />
        </a>
      </div>
      <div>
        <a target="_blank" href="https://github.com/ken-genesius">
          <FaGithub />
        </a>
      </div>
      <div>
        <a target="_blank" href="mailto:mkengenesius@gmail.com">
          <MdMail />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
