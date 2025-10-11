import Nav from "./_components/Nav/Nav";
import HeroSection from "./_components/Section/HeroSection/HeroSection";
import SkillsSection from "./_components/Section/SkillsSection/SkillsSection";
import CareersSection from "./_components/Section/CareersSection/CareersSection";
import EducationsSection from "./_components/Section/EducationsSection/EducationsSection";
import "./page.scss";

export default function Home() {
  return (
    <div className="home" id="home">
      <HeroSection />
      <div className="nav-container">
        <Nav />
      </div>
      <SkillsSection />
      <CareersSection />
      <section id="projects" className="section section__projects">
        <h3 className="section__title">프로젝트 상세</h3>
        <p className="section__description">
          주요 프로젝트의 상세 내용을 확인할 수 있습니다.
        </p>
      </section>
      <EducationsSection />
      <section id="awards" className="section section__awards">
        <h3 className="section__title">자격 및 수상</h3>
      </section>
    </div>
  );
}
