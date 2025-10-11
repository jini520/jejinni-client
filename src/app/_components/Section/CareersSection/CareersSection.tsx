import React from "react";
import Section from "../Section";
import StarBurst from "public/icons/star-burst.svg";
import careers from "@/app/_constants/careers.json";
import projects from "@/app/_constants/projects.json";
import "./careers-section.scss";

const CareersSection = () => {
  return (
    <Section id="career" className="section section__career">
      <h3 className="section__title">경력</h3>
      <p className="section__description">
        다양한 업무 경험과 프로젝트를 통해
        <br />
        기술적인 성장과 문제 해결 능력을 쌓아왔습니다.
      </p>
      <div className="timeline">
        <div className="timeline__group-title">
          <span className="bar"></span>
          <span>업무경력</span>
          <span className="bar bar__reverse"></span>
        </div>
        <ul className="timeline__list">
          {careers.map((career) => (
            <li className="timeline__item" key={career.company}>
              <span className="timeline__header">
                <StarBurst />
                <span className="timeline__date">{career.date}</span>
              </span>
              <div className="timeline__content">
                <div className="timeline__title">{career.company}</div>
                <span className="timeline__description">
                  {career.description}
                </span>
                <span className="timeline__description">{career.position}</span>
                <span className="timeline__button-detail">자세히 보기</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="timeline">
        <div className="timeline__group-title">
          <span className="bar"></span>
          <span>프로젝트</span>
          <span className="bar bar__reverse"></span>
        </div>
        <ul className="timeline__list">
          {projects.map((project) => (
            <li className="timeline__item" key={project.title}>
              <span className="timeline__header">
                <StarBurst />
                <span className="timeline__date">{project.date}</span>
              </span>
              <div className="timeline__content">
                <div className="timeline__title">{project.title}</div>
                <span className="timeline__description">
                  {project.description}
                </span>
                <span className="timeline__description">
                  {project.position}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default CareersSection;
