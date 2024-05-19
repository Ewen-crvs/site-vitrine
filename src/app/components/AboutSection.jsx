"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Databases skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>MongoDB</li>
        <li>MySQL</li>
        <li>PostgreSQL</li>
        <li>Firebase</li>
        <li>SQLite</li>
      </ul>
    ),
  },
  {
    title: "Languages skills",
    id: "languageskills",
    content: (
      <ul className="list-disc pl-2">
        <li>Ruby</li>
        <li>Elixir</li>
        <li>JavaScript</li>
        <li>Python</li>
        <li>C++</li>
        <li>React</li>
        <li>PHP</li>
        <li>Java</li>
        <li>Kotlin</li>
        <li>Dart</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>MBA Full Stack Developper, Lyon</li>
        <li>Computer Science BUT, IUT Claude Bernard, Lyon 1</li>
        <li>Baccalauréat (Spécialities : Computer Science, Maths)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Currently an apprentice in IT with a deep passion for the field grown over many years, 
          my journey began in high school, where I started coding and have continuously evolved my 
          skills since then. Throughout my education, I have explored numerous programming languages 
          and technologies, gaining experience in both mobile and web development. I thrive in team 
          environments and am excited to collaborate with others to create innovative and impactful 
          applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Databases skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("languageskills")}
              active={tab === "languageskills"}
            >
              {" "}
              Languages skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
