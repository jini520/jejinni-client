import Nav from "./_components/Nav/Nav";
import HeroSection from "./(sections)/HeroSection/HeroSection";
import SkillsSection from "./(sections)/SkillsSection/SkillsSection";
import CareersSection from "./(sections)/CareersSection/CareersSection";
import EducationsSection from "./(sections)/EducationsSection/EducationsSection";
import ProjectsSection from "./(sections)/ProjectsSection/ProjectsSection";
import CertificationsSection from "./(sections)/CertificationsSection/CertificationsSection";
import BlogPostSection from "./(sections)/BlogPostSection/BlogPostSection";
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
      <CertificationsSection />
      <BlogPostSection />
    </div>
  );
}
