import Navbar from "../components/Navbar";
import About from "./About";
import Experience from "./Experiences";
import Hero from "./Hero";
import ProjectsPage from "./Projects";
import SkillsPage from "./Skills";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <ProjectsPage />
      <SkillsPage />
    </div>
  );
};

export default Home;
