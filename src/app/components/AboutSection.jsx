"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Valparaiso University, Valparaiso, Indiana</li>
        <li>Bachelor of Science (BSc) with Magna Cum Laude honors</li>
        <li>GPA: 3.75</li>
        <li>January 2021 - May 2024</li>
      </ul>
    ),
  },

  {
    title: "FrontEnd",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>Node.js</li>
        <li>Tailwind CSS</li>
        <li>JavaScript</li>
        <li>HTML5</li>
        <li>Flask</li>
        <li>Git/GitHub/GitLab</li>
        <li>Fast API</li>
      </ul>
    ),
  },
  
  {
    title: "BackEnd and More",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>Java</li>
        <li>Spring Framework</li>
        <li>C/C++</li>
        <li>PostgreSQL</li>
        <li>MongoDB</li>
        <li>Neo4j</li>
        <li>Large Language Models (LLMs)</li>
        <li>Agile Methodology</li>
        <li>Artificial Intelligence (AI)</li>
      </ul>
    ),
  },

  {
    title: "Bootcamps and Hackathons",
    id: "involvement",
    content: (
      <ul className="list-disc pl-2">
        <li>Goldman Sachs x RTC Technical Bootcamp (November 2023 - April 2024)</li>
        <li>Black Wings Hackathon (February 2024)</li>
      </ul>
    ),
  },

  {
    title: "Awards",
    id: "award",
    content: (
      <ul className="list-disc pl-2">
        <li>Outstanding Leadership and Service Award (Valparaiso University)</li>
        <li>Recipient of the 2024 Class's Top International Student Award (Valparaiso University)</li>
        <li>Omicron Delta Kappa (Valpo Circle)</li>
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
        <Image src="/images/about-image.jpg" width={500} height={500} alt="About me" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
I&apos;m a Software Engineer driven by a passion for crafting innovative solutions. My expertise spans Java, Python, JavaScript, React, Node.js, Express, PostgreSQL, HTML, CSS, Git, and many more. I thrive on continuous learning, always eager to broaden my knowledge and skills. A dedicated team player, I relish the opportunity to collaborate with others to deliver top-notch products.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Frontend{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Backend and More{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("involvement")}
              active={tab === "involvement"}
            >
              {" "}
              Bootcamps and Hackathons{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("award")}
              active={tab === "award"}
            >
              {" "}
              Awards{" "}
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
