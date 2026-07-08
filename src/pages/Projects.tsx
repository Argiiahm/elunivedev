import ProjectCard from "../components/ProjectCard";
import { Projects } from "../data/Projects";

const ProjectsPage = () => {
  return (
    <section id="project" className="mt-20">
      <span className="font-medium dark:text-white">Projects</span>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {Projects.map((project, i) => (
          <ProjectCard
            key={i}
            img={project.img}
            title={project.title}
            slug={project.slug}
            demoURL={project.demoURL}
            features={project.features}
            techStack={project.techStack}
          />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <a
          className="rounded-md border border-zinc-200 px-4 py-2 text-zinc-400 transition hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-900"
          href="https://github.com/Argiiahm"
          target="_blank"
          rel="noopener noreferrer"
        >
          View all projects
        </a>
      </div>
    </section>
  );
};

export default ProjectsPage;
