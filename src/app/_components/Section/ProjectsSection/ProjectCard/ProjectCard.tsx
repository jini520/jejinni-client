import React from "react";
import LiquidGlass from "@/app/_components/LiquidGlass/LiquidGlass";
import Shape from "@/app/_components/Shape/Shape";
import SkillIcon from "@/app/_components/SkillIcon/SkillIcon";
import "./project-card.scss";
import { IconNames } from "@/constants/iconRegistry";
import classNames from "classnames";

interface ProjectCardProps {
  id: string;
  title: string;
  discription: string;
  skills: string[];
}

const colorMap = {
  0: "orange",
  1: "green",
  2: "blue",
};

const ProjectCard = ({ id, title, discription, skills }: ProjectCardProps) => {
  const color = id.charCodeAt(0) % 3;

  return (
    <LiquidGlass
      className={classNames(
        "project__card",
        `project__card--${colorMap[color as keyof typeof colorMap]}`
      )}
    >
      <Shape className="project__card-shape" id={id} />
      <h4 className="project__card-title">{title}</h4>
      <p className="project__card-description">{discription}</p>
      <div className="project__card-skills">
        {skills.map((skill) => (
          <SkillIcon
            className="project__card-skill"
            key={skill}
            skill={skill as IconNames}
            size="sm"
          />
        ))}
      </div>
    </LiquidGlass>
  );
};

export default ProjectCard;
