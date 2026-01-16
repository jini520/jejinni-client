"use client";

import React from "react";
import Section from "../Section";
import educations from "@/constants/educations.json";
import Astar from "public/icons/astar.svg";
import "./educations-section.scss";
import { useEdu } from "@/hooks/useEdu";

const EducationsSection = () => {
  const { data, isLoading } = useEdu();

  if (isLoading) return <div>Loading...</div>;

  return (
    <Section id="education" className="section section__educations">
      <h3 className="section__title">교육</h3>
      <ul className="timeline__list">
        {data?.map((education) => (
          <li className="timeline__item" key={education.education}>
            <span className="timeline__header">
              <Astar />
              <span className="timeline__date">
                {education.startDate} - {education.endDate}
              </span>
            </span>
            <div className="timeline__content">
              <div className="timeline__title">
                {education.education}
                <span className="timeline__status">{education.status}</span>
              </div>
              <span className="timeline__description">
                {education.description}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default EducationsSection;
