"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "FastTrack Android App",
    description: "An F1 app for fans to track their favorite drivers, teams, schedules, and standings.",
    image: "/images/projects/1.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Damienvaiton/Fasttrack",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Piano Helper WebApp",
    description: "An app that helps you play the piano by analyzing your hand movements.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/alexisboizard/ApplicationPiano",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "API Siren Website",
    description: "A website to search any french company by its SIREN number or its name with Ruby language.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ewen-crvs/ApiSirenRuby",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "A.M.E.S Game",
    description: "A horror game coded in Flutter",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Imperial-CZ/A.M.E.S.",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "WallWatcher App",
    description: "A Kotlin application connected to an ESP32 with a reversing camera to retrieve the video stream directly from the application",
    image: "/images/projects/5.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://iutbg-gitlab.iutbourg.univ-lyon1.fr/but3-iot-23-24/iot-g11-wallwatcher-vaiton-boizard-cervasi/api-g11-iot",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "McDo Surfer",
    description: "A “runner” type game made on Unity",
    image: "/images/projects/6.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/alexisboizard/mcdo_surfer",
    previewUrl: "/",
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
