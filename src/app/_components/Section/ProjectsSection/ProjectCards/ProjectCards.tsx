"use client";

import { useProjects } from "@/hooks/useProjects";
import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectCardSkeleton from "../ProjectCard/ProjectCardSkeleton";

const ProjectCards = () => {
  const { data: projects, isLoading, error } = useProjects();

  if (isLoading)
    return (
      <div className="project__cards">
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
      </div>
    );

  if (projects?.length === 0) return <div>No projects found</div>;
  // if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="project__cards">
      {projects?.map((item, index) => (
        <ProjectCard
          key={index}
          id={index.toString()}
          title={item.title}
          discription={item.description}
          skills={item.skills}
        />
      ))}
    </div>
  );
};

export default ProjectCards;
