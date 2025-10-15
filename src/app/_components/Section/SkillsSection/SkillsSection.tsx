"use client";

import React, { useState } from "react";
import classNames from "classnames";
import Section from "../Section";
import "./skills-section.scss";
import skill from "@/app/_constants/skills.json";

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
      <div className="filter">
        <ul className="filter__items">
          <li
            className={classNames("filter__item", {
              active: selected === "language",
            })}
            onClick={handleClickFilterItem}
            value={0}
          >
            언어
          </li>
          <li
            className={classNames("filter__item", {
              active: selected === "frontend",
            })}
            onClick={handleClickFilterItem}
            value={1}
          >
            프론트엔드
          </li>
          <li
            className={classNames("filter__item", {
              active: selected === "library",
            })}
            onClick={handleClickFilterItem}
            value={2}
          >
            라이브러리
          </li>
          <li
            className={classNames("filter__item", {
              active: selected === "build",
            })}
            onClick={handleClickFilterItem}
            value={3}
          >
            빌드
          </li>
          <li
            className={classNames("filter__item", {
              active: selected === "tools",
            })}
            onClick={handleClickFilterItem}
            value={4}
          >
            도구
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center">
        <div className="skill__icons">
          {/* <span className="skill__icon--png type__js"></span>
          <span className="skill__icon--png type__ts"></span>
          <span className="skill__icon--png type__java"></span>
          <span className="skill__icon--png type__react"></span>
          <span className="skill__icon--png type__next"></span>
          <span className="skill__icon--png type__rn"></span>
          <span className="skill__icon--png type__zustand"></span>
          <span className="skill__icon--png type__tailwind"></span>
          <span className="skill__icon--png type__jest"></span>
          <span className="skill__icon--png type__redux"></span>
          <span className="skill__icon--png type__storybook"></span>
          <span className="skill__icon--png type__linux"></span>
          <span className="skill__icon--png type__vite"></span>
          <span className="skill__icon--png type__github"></span>
          <span className="skill__icon--png type__gitlab"></span>
          <span className="skill__icon--png type__jira"></span>
          <span className="skill__icon--png type__docker"></span>
          <span className="skill__icon--png type__figma"></span>
          <span className="skill__icon--png type__recoil"></span>
          <span className="skill__icon--png type__notion"></span> */}
          {skills.catagory.map((catagory) => (
            <React.Fragment key={catagory}>
              {skills.items[catagory as keyof typeof skills.items].map(
                (item) => (
                  <span
                    key={skill[item as keyof typeof skill].name}
                    className={classNames("skill__icon", {
                      active: selected === catagory || selected === null,
                    })}
                  >
                    <svg width={48} height={48} className="rounded-sm">
                      <use href={`${skill[item as keyof typeof skill].url}`} />
                    </svg>
                  </span>
                )
              )}
              {catagory === "library" && (
                <React.Fragment>
                  <span
                    className={classNames(
                      "skill__icon--png type__styled-components",
                      {
                        active: selected === catagory || selected === null,
                      }
                    )}
                  ></span>
                  <span
                    className={classNames(
                      "skill__icon--png type__tanstack-query",
                      {
                        active: selected === catagory || selected === null,
                      }
                    )}
                  ></span>
                </React.Fragment>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SkillsSection;
