import HeroSection from "../components/HeroSection";
import AboutPreview from "../components/AboutPreview";
import FeaturedServices from "../components/FeaturedServices";
import ProjectsPreview from "../components/ProjectsPreview";
import Testimonials from "../components/Testimonials";
/*import FooterCTA from "../components/FooterCTA";*/

function Home() {
  return (
    <div className="home">
      <HeroSection />
      <AboutPreview />
      <FeaturedServices />
      <ProjectsPreview />
      <Testimonials />
      
    </div>
  );
}

export default Home;

