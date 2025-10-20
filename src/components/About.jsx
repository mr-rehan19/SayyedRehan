import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { div } from "framer-motion/client";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient shadow-card rounded-[20px] p-[1px]"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={`${icon}${icon.includes("?") ? "&" : "?"}tr=f-auto`}
            alt={title}
            loading="lazy"
            width={64}
            height={64}
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[14px] sm:text-[17px] max-w-3xl sm:leading-[30px] leading-1"
      >
       <p> I am Sayyed Rehan, a passionate Java Full Stack Developer with a strong command over both front-end and back-end technologies. My journey into the world of software development began during my academic years at Sant Gadge Baba Amravati University, where I successfully completed my Bachelor of Computer Applications (BCA). Throughout my studies, I developed a deep understanding of computer science fundamentals, data structures, algorithms, and object-oriented programming, which laid a strong foundation for my professional growth.</p> 

      <p> I have always been fascinated by how technology can solve real-world problems, and this curiosity has driven me to master the full-stack development cycle — from designing intuitive and responsive user interfaces to building robust, scalable back-end systems. My expertise includes working with Java, Spring Boot, HTML, CSS, JavaScript, and MySQL, among other technologies. </p>
      <p>In addition to my technical skills, I take pride in being a self-motivated learner who enjoys exploring new frameworks, tools, and technologies to stay up to date with industry trends. I believe in writing clean, efficient, and maintainable code while maintaining a strong focus on performance and user experience.</p>
      <p>Beyond coding, I enjoy collaborating with teams, brainstorming innovative solutions, and contributing to projects that create a meaningful impact. My goal as a developer is not just to build software, but to create solutions that make life simpler and smarter.</p>
      <p>I’m excited to continue growing as a professional in the software development field, taking on challenging projects that push my limits and help me refine my craft as a Java Full Stack Developer.</p>
      </motion.p>
      <div className="mt-20 flex  flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
