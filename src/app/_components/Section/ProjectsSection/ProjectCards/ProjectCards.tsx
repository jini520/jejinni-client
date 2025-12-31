"use client";

import { useProjects } from "@/hooks/useProjects";
import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectCardSkeleton from "../ProjectCard/ProjectCardSkeleton";
import Link from "next/link";

const ProjectCards = () => {
  const { data, isLoading, error } = useProjects();
  const projects = data?.items || [];

  if (isLoading)
    return (
      <div className="project__cards">
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
      </div>
    );

  if (projects.length === 0) return <div>No projects found</div>;
  // if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="project__cards">
      {projects.map((item) => (
        <Link href={`/projects/${item.id}`} key={item.id} scroll={false}>
          <ProjectCard
            id={item.id}
            title={item.title}
            discription={item.description}
            skills={item.skills}
          />
        </Link>
      ))}
    </div>
  );
};

export default ProjectCards;
