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
<p>👋✨ I’m <strong>Sayyed Rehan</strong>, a passionate Java Full Stack Developer with expertise across both front-end 🎨 and back-end ⚙️ development. My tech journey started during my academic years at Sant Gadge Baba Amravati University 🎓, where I completed my Bachelor of Computer Applications (BCA). During this phase, I built strong fundamentals in computer science 🧠 — including Data Structures, Algorithms, and Object-Oriented Programming 💻 — forming a solid base for my professional growth 📈.</p>

<p>💡🔥 Technology excites me because it has the power to solve real-world problems 🌍. This curiosity drives me to excel in full-stack development — from creating responsive and intuitive user interfaces 🖥️📱 to building robust and scalable backend systems 🏗️. My technical stack includes Java ☕, Spring Boot 🌱, HTML 🌐, CSS 🎨, JavaScript ⚡, and MySQL 🗄️, along with modern tools and frameworks 🛠️.</p>

<p>📚🚀 I am a self-driven learner who constantly explores new technologies 💻🔍 and stays aligned with industry trends 📊. I believe in writing clean 🧼, efficient ⚡, and maintainable code ✨, while ensuring top-notch performance 🏎️ and smooth user experience 🧑‍💻.</p>

<p>🤝💭 Beyond writing code, I enjoy team collaboration 👥, constructive discussions 💬, and brainstorming creative tech solutions 💡🤔. My focus is not just to build software 💼 — but to create smart, meaningful digital solutions that enhance everyday life 🌐💙.</p>

<p>🚀🎯 I’m excited to take on challenging projects 🧩 that push my limits, sharpen my technical skills 🛠️, and support my continuous growth as a Java Full Stack Developer 👨‍💻. The journey continues — learning, evolving, and building impactful software 🔥.</p>
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
