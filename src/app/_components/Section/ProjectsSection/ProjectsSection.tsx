import React from "react";
import Section from "../Section";
import "./projects-section.scss";
import ProjectCard from "./ProjectCard/ProjectCard";

const ProjectsSection = () => {
  return (
    <Section id="projects" className="section__projects">
      <h3 className="section__title">프로젝트 상세</h3>
      <p className="section__description">
        주요 프로젝트의 상세 내용을 확인할 수 있습니다.
      </p>
      <div className="project__cards">
        <ProjectCard />
      </div>
    </Section>
  );
};

export default ProjectsSection;
