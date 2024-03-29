import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import aboutMeImg from "../images/aboutme.jpeg";
// import { useTranslation } from 'react-i18next';
// import i18next from "i18next";

/**
 * Represents the About Me section.
 * Displays information about the user.
 *
 * @component
 * @param {string} name - The name of the user.
 */

const AboutMe = ({ name }) => {
  // adding constant t
  // const {t, i18n} = useTranslation();

  // Using react-intersection-observer to determine if the component is in view
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  // Variants for staggered animations
  const staggerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Variants for paragraph animations
  const paragraphVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="about">
      <div className="aboutContainer container">
        <div className="row">
          <motion.div
            className="personalImage col-12 col-lg-6"
            ref={ref}
            initial={{ x: "-10vw", opacity: 0, scale: 0.5 }}
            animate={inView ? { x: 0, opacity: 1, scale: 1 } : { x: "-10vw", opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Display the personal image */}
            <motion.img src={aboutMeImg} alt={name} />
          </motion.div>
          <div className="personalInfo col-12 col-lg-6">
            <motion.div className="contentContainer" variants={staggerVariants}>
              {/* Display greeting and job title with animation */}
              <motion.h4 variants={paragraphVariants}>Hello Hello! Nice to meet you!</motion.h4>
              <motion.h5 variants={paragraphVariants}>I'm a IT-Specialist at Deloitte.</motion.h5>

              {/* Display content description with animation */}
              <motion.div
                className="contentDescription"
                variants={staggerVariants}
                initial="initial"
                animate={inView ? "animate" : "initial"}
              >
                {/* Paragraphs with animation */}
                <motion.p variants={paragraphVariants}>
                Right now i am in the final stages of completing my IT-apprenticeship at the well-known 
                company Deloitte.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  Starting the dual training program straight away was the best decision I could have made. My 
                  focus is on cloud services and infrastructure management. DevOps in the cloud has helped me 
                  to gain a lot of cloud knowledge over the past two years.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  I am also attending the CCNAv7 class in networking and it is my goal to expand my knowledge in 
                  the field of cyber security and digital forensics.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  In ordner to gather inspiration and new ideas, I like to travel to the mountains or visit 
                  nature on boat and camping tours on paths that are unknown to me.
                </motion.p>
              </motion.div>

              {/* Button to view the portfolio */}
              <NavLink to="/portfolio">
                <Button name="View My Portfolio" />
              </NavLink>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
