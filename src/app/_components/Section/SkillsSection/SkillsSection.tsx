"use client";

import React, { useState } from "react";
import classNames from "classnames";
import Section from "../Section";
import SkillIcon from "../../SkillIcon/SkillIcon";
import "./skills-section.scss";
import { IconNames } from "@/app/_constants/iconRegistry";
import LiquidGlass from "../../LiquidGlass/LiquidGlass";

const skills = {
  catagory: ["language", "frontend", "library", "build", "tools"],
  items: {
    language: ["javascript", "typescript", "java"],
    frontend: ["react", "nextjs", "reactnative"],
    library: [
      "zustand",
      "recoil",
      "tailwind",
      "jest",
      "redux",
      "storybook",
      "sass",
      "styled-components",
      "tanstack-query",
    ],
    build: ["vite", "docker"],
    tools: ["figma", "github", "gitlab", "jira", "notion"],
  },
};

const SkillsSection = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleClickFilterItem = (e: React.MouseEvent<HTMLLIElement>) => {
    if (selected === skills.catagory[e.currentTarget.value]) {
      setSelected(null);
      return;
    }
    setSelected(skills.catagory[e.currentTarget.value]);
  };

  return (
    <Section id="skills" className="section__skills">
      <h3 className="section__title">기술 스택</h3>
      <p className="section__description">아래 기술들을 사용할 수 있습니다.</p>
      <LiquidGlass className="filter">
        <ul className="filter__items">
          <li
            className={classNames("filter__item", {
              selected: selected === "language",
            })}
            onClick={handleClickFilterItem}
            value={0}
          >
            언어
          </li>
          <li
            className={classNames("filter__item", {
              selected: selected === "frontend",
            })}
            onClick={handleClickFilterItem}
            value={1}
          >
            프론트엔드
          </li>
          <li
            className={classNames("filter__item", {
              selected: selected === "library",
            })}
            onClick={handleClickFilterItem}
            value={2}
          >
            라이브러리
          </li>
          <li
            className={classNames("filter__item", {
              selected: selected === "build",
            })}
            onClick={handleClickFilterItem}
            value={3}
          >
            빌드
          </li>
          <li
            className={classNames("filter__item", {
              selected: selected === "tools",
            })}
            onClick={handleClickFilterItem}
            value={4}
          >
            도구
          </li>
        </ul>
      </LiquidGlass>
      <div className="flex items-center justify-center">
        <div className="skill__icons">
          {skills.catagory.map((catagory) => (
            <React.Fragment key={catagory}>
              {skills.items[catagory as keyof typeof skills.items].map(
                (item) => (
                  <SkillIcon
                    key={item}
                    className="skill__icon"
                    skill={item as IconNames}
                    selected={selected === catagory || selected === null}
                  />
                )
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SkillsSection;
