import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { AppWrap, MotionWrap } from "../../wrapper";

import "./portfolio.scss";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/30872819/pexels-photo-30872819/free-photo-of-elegant-coffee-set-on-a-sunlit-table-in-ankara.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero enim nisi aliquam consectetur expedita magni eius ex corrupti animi! Ad nam pariatur assumenda quae mollitia libero repellat explicabo maiores?",
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "https://images.pexels.com/photos/30600496/pexels-photo-30600496/free-photo-of-vibrant-in-n-out-burger-exterior-in-los-angeles.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero enim nisi aliquam consectetur expedita magni eius ex corrupti animi! Ad nam pariatur assumenda quae mollitia libero repellat explicabo maiores?",
  },
  {
    id: 3,
    title: "Vanilla JS App",
    img: "https://images.pexels.com/photos/30891641/pexels-photo-30891641/free-photo-of-luxury-desert-tents-in-omani-dunes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero enim nisi aliquam consectetur expedita magni eius ex corrupti animi! Ad nam pariatur assumenda quae mollitia libero repellat explicabo maiores?",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/31236777/pexels-photo-31236777/free-photo-of-traditional-chinese-architecture-with-modern-buildings.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero enim nisi aliquam consectetur expedita magni eius ex corrupti animi! Ad nam pariatur assumenda quae mollitia libero repellat explicabo maiores?",
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
          <div className="app__portfolio-imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="app__portfolio-textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
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
    <div className="app__portfolio-work" ref={ref}>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default AppWrap(
  MotionWrap(Portfolio, "app__portfolio"),
  "portfolio",
  "app__primarybg"
);
