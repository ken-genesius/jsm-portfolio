import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { MdStars } from "react-icons/md";
import { urlFor, client } from "../../client";

import "./portfolio.scss";

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    //offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="app__portfolio-container">
        <div className="app__portfolio-wrapper">
          <div className="app__portfolio-section" ref={ref}>
            <div className="app__portfolio-section-portfolio">
              <div
                className="app__portfolio-section-content"
                style={{ backgroundColor: item.bgColor }}
              >
                <motion.a
                  href={item.url}
                  className="app__portfolio-section-link"
                  whileInView={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.25 }}
                >
                  <span>{item.title}</span>
                  <span>{">"}</span>
                </motion.a>
                <motion.div
                  className="app__portfolio-section-image"
                  whileInView={{ y: 0 }}
                  whileHover={{ y: "-20%" }}
                  transition={{ duration: 0.25 }}
                >
                  <img src={urlFor(item.imgUrl)} alt="" />
                </motion.div>
              </div>
            </div>
          </div>
          <motion.div className="app__portfolio-textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <div className="app__portfolio-techstack-container">
              {item.stacks.map((tStack, index) => (
                <div
                  className="app__portfolio-techstack"
                  key={item.id + "-" + tStack.title + "-" + index}
                >
                  <img
                    src={urlFor(tStack.iconUrl)}
                    className="app__portfolio-techstack-icon"
                    alt={tStack.title}
                  />
                  <span className="app__portfolio-techstack-title">
                    {tStack.title}
                  </span>
                </div>
              ))}
            </div>
            <p>{item.desc}</p>
            <div className="app__portfolio-point-container">
              {item.points.map((point, index) => (
                <div
                  className="app__portfolio-point"
                  key={item.id + "-points-" + index}
                >
                  <MdStars className="app__portfolio-point-icon" />
                  <span className="app__portfolio-point-span">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    const query = '*[_type == "portfolios"] | order(order asc)';

    client.fetch(query).then((data) => {
      setPortfolios(data);
    });
  }, []);

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

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="p-text">What I have made</p>
        <h2 className="head-text">
          Projects & <span>Portfolios</span>
        </h2>
      </motion.div>
      <div className="app__portfolio-work" ref={ref}>
        {portfolios.map((portfolio, index) => (
          <Single item={portfolio} key={index} />
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Portfolio, "app__portfolio"),
  "portfolio",
  "app__primarybg"
);
