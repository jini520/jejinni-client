import React from "react";
import LiquidGlass from "@/app/_components/LiquidGlass/LiquidGlass";
import Shape from "@/app/_components/Shape/Shape";
import SkillIcon from "@/app/_components/SkillIcon/SkillIcon";
import classNames from "classnames";
import { IconNames } from "@/constants/iconRegistry";
import useColor from "@/hooks/useColor";
import "./project-card.scss";

interface ProjectCardProps {
  id: string;
  title: string;
  discription: string;
  skills: string[];
}

const ProjectCard = ({ id, title, discription, skills }: ProjectCardProps) => {
  const { getColor } = useColor();

  return (
    <LiquidGlass
      className={classNames("project__card", `project__card--${getColor(id)}`)}
    >
      <div className="project__card-inner">
        <Shape className="project__card-shape" id={id} />
        <div>
          <h4 className="project__card-title">{title}</h4>
          <p className="project__card-description">{discription}</p>
        </div>
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
      </div>
    </LiquidGlass>
  );
};

export default ProjectCard;
