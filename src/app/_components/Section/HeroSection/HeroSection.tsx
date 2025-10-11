import React from "react";
import Section from "../Section";
import "./hero-section.scss";

const HeroSection = () => {
  return (
    <Section className="section__hero">
      <h1 className="section__title">
        <p>
          안녕하세요, <br />
          프론트엔드 개발자 <br />
          <span className="flicker-text">제진명</span>
          입니다.
        </p>
      </h1>
      <p className="section__description">
        I'm a frontend developer with a passion for creating beautiful and
        functional web applications.
        <br />
        I'm a frontend developer with a passion for creating beautiful and
        functional web applications.
        <br />
        I'm a frontend developer with a passion for creating beautiful and
        functional web applications.
        <br />
      </p>
    </Section>
  );
};

export default HeroSection;
