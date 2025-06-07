import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import StackIcon from "tech-stack-icons";
import { MdStars } from "react-icons/md";

import "./portfolio.scss";

const items = [
  {
    id: 1,
    bgColor: "#84563f",
    title: "React Commerce",
    img: "https://images.pexels.com/photos/30872819/pexels-photo-30872819/free-photo-of-elegant-coffee-set-on-a-sunlit-table-in-ankara.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero enim nisi aliquam consectetur expedita magni eius ex corrupti animi! Ad nam pariatur assumenda quae mollitia libero repellat explicabo maiores?",
    points: [
      "Built a financial calculator to assist customers in determining credit card options.",
      "Developed a user-friendly interface with Laravel and Tailwind.",
      "Optimized the back-end logic for accuracy and efficiency.",
    ],
    url: "#",
    stacks: [
      {
        title: "HTML5",
        icon: "html5",
      },
      {
        title: "JavaScript",
        icon: "js",
      },
      {
        title: "Bootstrap",
        icon: "bootstrap4",
      },
    ],
  },
  {
    id: 2,
    bgColor: "#8ed2e9",
    title: "Next.js Blog",
    img: "https://images.pexels.com/photos/30600496/pexels-photo-30600496/free-photo-of-vibrant-in-n-out-burger-exterior-in-los-angeles.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero enim nisi aliquam consectetur expedita magni eius ex corrupti animi! Ad nam pariatur assumenda quae mollitia libero repellat explicabo maiores?",
    url: "#",
    points: [
      "Built a financial calculator to assist customers in determining credit card options.",
      "Developed a user-friendly interface with Laravel and Tailwind.",
      "Optimized the back-end logic for accuracy and efficiency.",
    ],
    stacks: [
      {
        title: "HTML5",
        icon: "html5",
      },
      {
        title: "JavaScript",
        icon: "js",
      },
      {
        title: "Bootstrap",
        icon: "bootstrap4",
      },
    ],
  },
  {
    id: 3,
    bgColor: "#c3ada0",
    title: "Vanilla JS App",
    img: "https://images.pexels.com/photos/30891641/pexels-photo-30891641/free-photo-of-luxury-desert-tents-in-omani-dunes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero enim nisi aliquam consectetur expedita magni eius ex corrupti animi! Ad nam pariatur assumenda quae mollitia libero repellat explicabo maiores?",
    url: "#",
    points: [
      "Built a financial calculator to assist customers in determining credit card options.",
      "Developed a user-friendly interface with Laravel and Tailwind.",
      "Optimized the back-end logic for accuracy and efficiency.",
    ],
    stacks: [
      {
        title: "HTML5",
        icon: "html5",
      },
      {
        title: "JavaScript",
        icon: "js",
      },
      {
        title: "Bootstrap",
        icon: "bootstrap4",
      },
    ],
  },
  {
    id: 4,
    bgColor: "#b96c44",
    title: "Music App",
    img: "https://images.pexels.com/photos/31236777/pexels-photo-31236777/free-photo-of-traditional-chinese-architecture-with-modern-buildings.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero enim nisi aliquam consectetur expedita magni eius ex corrupti animi! Ad nam pariatur assumenda quae mollitia libero repellat explicabo maiores?",
    url: "#",
    points: [
      "Built a financial calculator to assist customers in determining credit card options.",
      "Developed a user-friendly interface with Laravel and Tailwind.",
      "Optimized the back-end logic for accuracy and efficiency.",
    ],
    stacks: [
      {
        title: "HTML5",
        icon: "html5",
      },
      {
        title: "JavaScript",
        icon: "js",
      },
      {
        title: "Bootstrap",
        icon: "bootstrap4",
      },
    ],
  },
];

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
                  <img src={item.img} alt="" />
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
                  <StackIcon
                    className="app__portfolio-techstack-icon"
                    name={tStack.icon}
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
        {items.map((item) => (
          <Single item={item} key={item.id} />
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
