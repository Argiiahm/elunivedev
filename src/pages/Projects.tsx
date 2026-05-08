import ProjectCard from "../components/ProjectCard";
import { Projects } from "../data/Projects";

const ProjectsPage = () => {
  return (
    <section id="project" className="mt-20">
      <span className="font-medium dark:text-white">Projects</span>
      {Projects.map((project, i) => (
        <ProjectCard
          key={i}
          title={project.title}
          demoURL={project.demoURL}
          features={project.features}
          techStack={project.techStack}
        />
      ))}
      <div className="flex justify-center">
        <a
          className="border border-zinc-200 px-4 py-2 text-zinc-400 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 transition duration-300"
          href="https://github.com/Argiiahm"
          target="_blank"
        >
          View all projects
        </a>
      </div>
    </section>
  );
};

export default ProjectsPage;
