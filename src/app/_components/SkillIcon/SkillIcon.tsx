"use client";

import React, { useState } from "react";
import skills from "@/app/_constants/skills.json";
import classNames from "classnames";
import "./skill-icon.scss";

export type SkillIconTypes =
  | "javascript"
  | "typescript"
  | "java"
  | "react"
  | "nextjs"
  | "reactnative"
  | "zustand"
  | "recoil"
  | "tailwind"
  | "jest"
  | "redux"
  | "storybook"
  | "vite"
  | "docker"
  | "figma"
  | "github"
  | "gitlab"
  | "jira"
  | "notion"
  | "sass"
  | "electron"
  | "solidity";

interface SkillIconProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  selected: boolean;
  skill: SkillIconTypes;
}

const sizeMap = {
  sm: 24,
  md: 48,
  lg: 72,
};

const SkillIcon = ({
  className,
  size = "md",
  skill,
  selected,
}: SkillIconProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="icon__container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {skills[skill as keyof typeof skills].type === "svg" ? (
        <div
          className={classNames(className, {
            selected: selected,
          })}
        >
          <svg
            width={sizeMap[size]}
            height={sizeMap[size]}
            className="rounded-sm"
          >
            <use href={`${skills[skill as keyof typeof skills].url}`} />
          </svg>
        </div>
      ) : (
        <div
          className={classNames(`${className}--png type__${skill}`, {
            selected: selected || selected === null,
          })}
        ></div>
      )}
      {isHovered && selected && (
        <div className="icon__tooltip">
          <p className="icon__tooltip--text">
            {skills[skill as keyof typeof skills].name}
          </p>
        </div>
      )}
    </div>
  );
};

export default SkillIcon;
