"use client";

import React, { useCallback, useMemo, useState } from "react";
import classNames from "classnames";
import Section from "../Section";
import SkillIcon from "../../SkillIcon/SkillIcon";
import LiquidGlass from "../../LiquidGlass/LiquidGlass";
import { IconNames } from "@/constants/iconRegistry";
import { useSkills } from "@/hooks/useSkills";
import "./skills-section.scss";

const SkillsSection = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const { data, isLoading } = useSkills();

  const handleClickFilterItem = useCallback(
    (categoryId: string) => {
      if (selected === categoryId) {
        setSelected(null);
        return;
      }
      setSelected(categoryId || null);
    },
    [selected]
  );

  // 카테고리 order 순으로 정렬
  const sortedCategories = useMemo(() => {
    if (!data?.categories) return [];
    return [...data.categories].sort((a, b) => a.order - b.order);
  }, [data?.categories]);

  // 카테고리 order → 스킬 order 순으로 정렬
  const sortedSkills = useMemo(() => {
    if (!data?.skills || !data?.categories) return [];

    // 카테고리 ID → order 매핑
    const categoryOrderMap = new Map(
      data.categories.map((cat) => [cat.id, cat.order])
    );

    return [...data.skills].sort((a, b) => {
      // 1. 카테고리 order로 먼저 정렬
      const categoryOrderA = categoryOrderMap.get(a.categoryId) ?? 0;
      const categoryOrderB = categoryOrderMap.get(b.categoryId) ?? 0;

      if (categoryOrderA !== categoryOrderB) {
        return categoryOrderA - categoryOrderB;
      }

      // 2. 같은 카테고리 내에서는 스킬 order로 정렬
      return a.order - b.order;
    });
  }, [data?.skills, data?.categories]);

  if (isLoading)
    return (
      <Section id="skills" className="section__skills">
        <h3 className="section__title">기술 스택</h3>
        <p className="section__description">
          아래 기술들을 사용할 수 있습니다.
        </p>
        <div className="filter__container">
          <LiquidGlass className="filter__wrapper">
            <div className="filter">
              <ul className="filter__items w-68 h-10"></ul>
            </div>
          </LiquidGlass>
        </div>
        <div className="flex items-center justify-center animate-pulse">
          <div className="skill__icons">
            {Array.from({ length: 16 }).map((_, index) => (
              <div
                key={index}
                className="w-12 h-12 bg-gray-200 rounded-sm"
              ></div>
            ))}
          </div>
        </div>
      </Section>
    );

  return (
    <Section id="skills" className="section__skills">
      <h3 className="section__title">기술 스택</h3>
      <p className="section__description">아래 기술들을 사용할 수 있습니다.</p>
      <div className="filter__container">
        <LiquidGlass className="filter__wrapper">
          <div className="filter">
            <ul className="filter__items">
              {sortedCategories.map((category) => (
                <li
                  key={category.id}
                  className={classNames("filter__item", {
                    selected: selected === category.id,
                  })}
                  onClick={() => handleClickFilterItem(category.id)}
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
        </LiquidGlass>
      </div>
      <div className="flex items-center justify-center">
        <div className="skill__icons">
          {sortedSkills.map((skill) => (
            <SkillIcon
              key={skill.id}
              className="skill__icon"
              size="lg"
              skill={skill.name as IconNames}
              selected={selected === skill.categoryId || selected === null}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SkillsSection;
