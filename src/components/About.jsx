import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from '../constants/index'
import { SectionWrapper } from "../hoc";

const Servicecard = ({title, icon, index}) => {
  return(
    <Tilt className=" xs:w-[200px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div options={{
          max:45,
          scale:1,
          speed:450
        }} className=" bg-tertiary rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Dedicated, enthusiastic and competent full-stack developer with 3+ years
        of experience in application layers, presentation layers, and databases.
        Dedicated professional with proven performance in management, leadership
        and communication. Detailed in problem-solving and planning. Proficient
        in both Frontend and Backend technologies. Seeking to further improve my
        Web/Mobile Development and Devops skills and looking forward to getting
        an opportunity as a full-stack developer to make an immediate
        contribution to your organization.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <Servicecard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About,"about");
