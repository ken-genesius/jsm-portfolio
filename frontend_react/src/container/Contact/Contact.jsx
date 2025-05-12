import { useState, useRef } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 200,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  const form = useRef();

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_b4pm9gj", "template_nrpxslp", form.current, {
        publicKey: "7C7iLtshuXmMtk-zd",
      })
      .then(
        () => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      className="app__contact-container"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="app__contact-list" variants={variants}>
        <motion.h1 variants={variants}>
          Let's work <span>together</span>
        </motion.h1>
        <motion.div className="app__contact-list-item" variants={variants}>
          <h2>Mail</h2>
          <span>mkengenesius@gmail.com</span>
        </motion.div>
        <motion.div className="app__contact-list-item" variants={variants}>
          <h2>Address</h2>
          <span>Malang, Indonesia</span>
        </motion.div>
        <motion.div className="app__contact-list-item" variants={variants}>
          <h2>Phone</h2>
          <span>(+62) 896 7866 4216</span>
        </motion.div>
      </motion.div>
      <motion.div className="app__contact-form" variants={variants}>
        <motion.div
          className="app__contact-phone-svg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              strokeWidth={1}
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 2 }}
              d="M7 9H17M7 13H17M21 20L17.6757 18.3378C17.4237 18.2118 17.2977 
                        18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 
                        16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 
                        3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2C3 6.07989 3 5.51984 
                        3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 
                        6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 
                        5.09202C21 5.51984 21 6.0799 21 7.2V20Z"
            />
          </svg>
        </motion.div>
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message" />
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default AppWrap(
  MotionWrap(Contact, "app__contact"),
  "contact",
  "app__whitebg"
);
