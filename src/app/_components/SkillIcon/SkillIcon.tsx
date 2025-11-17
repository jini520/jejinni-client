"use client";

import React, { useState } from "react";
import classNames from "classnames";
import "./skill-icon.scss";
import { iconRegistry, IconNames } from "@/app/_constants/iconRegistry";

const sizeMap = {
  sm: 24,
  md: 48,
  lg: 72,
};
interface SkillIconProps {
  className?: string;
  size?: keyof typeof sizeMap;
  selected: boolean;
  skill: IconNames;
}

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

  if (!iconRegistry[skill as IconNames]) {
    console.log(iconRegistry[skill], skill);
  }

  const IconComponent = iconRegistry[skill as IconNames];

  return (
    <div
      className="icon__container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={classNames(`icon__${size}`, className, {
          selected: selected,
        })}
      >
        <IconComponent width={sizeMap[size]} height={sizeMap[size]} />
      </div>
      {isHovered && selected && (
        <div className="icon__tooltip">
          <p className="icon__tooltip--text">{skill}</p>
        </div>
      )}
    </div>
  );
};

export default SkillIcon;
