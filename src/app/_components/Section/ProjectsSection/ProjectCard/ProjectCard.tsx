import React from "react";
import "./project-card.scss";
import LiquidGlass from "@/app/_components/LiquidGlass/LiquidGlass";

interface ProjectCardProps {
  id: string;
  title: string;
  discription: string;
  skills: string[];
}

const ProjectCard = ({ id, title, discription, skills }: ProjectCardProps) => {
  return <LiquidGlass className="project__card">{title}</LiquidGlass>;
};

export default ProjectCard;
