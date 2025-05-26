import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { React, useState, useEffect } from "react";
import { images } from "../../constants";
import { urlFor, client } from "../../client";

import "react-vertical-timeline-component/style.min.css";
import "./Experience.scss";

const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    className="app__experience-timeline-element"
    contentStyle={{
      background: "var(--secondary-color-transparent)",
      color: "#fff",
      borderRadius: "15px",
    }}
    contentArrowStyle={{
      borderRight: "7px solid var(--secondary-color-transparent)",
    }}
    iconStyle={{
      background: experience.iconBg,
      boxShadow:
        "0 0 0 4px var(--white-color), inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)",
    }}
    icon={
      <div className="app__experience-timeline-icon">
        <img src={urlFor(experience.icon)} alt={experience.companyName} />
      </div>
    }
  >
    <div className="app__experience-timeline-element-head">
      <h3>{experience.title}</h3>
      <p>{experience.companyName}</p>
      <p className="app__experience-timeline-date">{experience.date}</p>
    </div>

    <ul className="app__experience-timeline-element-list">
      {experience.points.map((point, index) => (
        <li key={`experience-point-${index}`}>{point}</li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiencesV2"] | order(order desc)';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="p-text">What I have done so far</p>
        <h2 className="head-text">
          Work <span>Experience</span>
        </h2>
      </motion.div>

      <div className="app__experience-timeline">
        <VerticalTimeline
          lineColor="var(--primary-color)"
          className="app__experience-timeline-line"
        >
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Experience, "app__experience"),
  "experience",
  "app__whitebg"
);
