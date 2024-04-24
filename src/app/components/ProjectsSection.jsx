"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Nourish Net",
    description: "Nourish Net is an intuitive platform aimed at addressing food insecurity among college students nationwide. Developed using React.js, Node.js. Team Size: 4",
    image: "/images/projects/nourishNet.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/maponbie/DEVAS/tree/main/src",
    previewUrl: "https://devpost.com/software/nourish-net-an-online-food-relief-network",
  },

  {
    id: 2,
    title: "Citation Application",
    description: "TotlBib is a robust citation web application that enables users in effortlessly adding, searching, removing, and categorizing bibliography items. Developed using React.js, Node.js, Express.js, and PostgreSQL. Team Size: 3",
    image: "/images/projects/citation.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/NicholasBean/Totl/tree/main/src",
    previewUrl: "/",
  },

  {
    id: 3,
    title: "Spring Boot Task Manager",
    description: "Task Manager is the go-to solution for seamless task management, powered by the robust Spring Boot framework. Whether you are organizing your to-dos, tracking projects, or managing deadlines, TaskMaster makes it easy with its intuitive interface and powerful features. Team Size: 1",
    image: "/images/projects/spring_task.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/maponbie/Spring-Boot-Task-Manager",
    previewUrl: "https://www.youtube.com/watch?v=y3RcrOTv2WU",
  },

  {
    id: 4,
    title: "Mapping Tracker Application",
    description: "Description: Development in Progress",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },

  {
    id: 5,
    title: "MS Paint (Java Rendition)",
    description: "Employed Java and JavaFX to create a graphics editor, offering users vital tools to draw and edit images utilizing a pixel-based canvas. Team Size: 1",
    image: "/images/projects/paint.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/maponbie/Martha-Paint/tree/master/src/main/java/com/example/paint",
    previewUrl: "https://www.youtube.com/watch?v=9_dCrP5_5Ug",
  },

  {
    id: 6,
    title: "The Druid's Reckoning",
    description: "The Druid's Reckoning, a 3D third-person RPG video game driven by Unreal Engine 5 (UE5), embodies an immersive gaming experience intricately developed through Agile methodologies and close collaboration with the storytelling team, vividly bringing the narrative to life. Team Size: 4",
    image: "/images/projects/game.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/maponbie/3D-Game-Demo/tree/main",
    previewUrl: "https://youtu.be/oBUhLqNEdJ4",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
