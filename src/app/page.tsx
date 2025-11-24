import Nav from "./_components/Nav/Nav";
import HeroSection from "./_components/Section/HeroSection/HeroSection";
import SkillsSection from "./_components/Section/SkillsSection/SkillsSection";
import CareersSection from "./_components/Section/CareersSection/CareersSection";
import EducationsSection from "./_components/Section/EducationsSection/EducationsSection";
import ProjectsSection from "./_components/Section/ProjectsSection/ProjectsSection";
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
      <ProjectsSection />
      <EducationsSection />
      <section id="awards" className="section section__awards">
        <h3 className="section__title">자격 및 수상</h3>
      </section>
    </div>
  );
}
