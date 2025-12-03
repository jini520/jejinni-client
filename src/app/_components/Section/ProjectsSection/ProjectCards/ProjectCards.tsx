"use client";

import { useProjects } from "@/hooks/useProjects";
import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectCards = () => {
  const { data: projects, isLoading, error } = useProjects();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="project__cards">
      {projects?.map((item, index) => (
        <ProjectCard
          key={index}
          id={index.toString()}
          title={item.title}
          discription={item.description}
          skills={["1", "2", "3"]}
        />
      ))}
    </div>
  );
};

export default ProjectCards;
