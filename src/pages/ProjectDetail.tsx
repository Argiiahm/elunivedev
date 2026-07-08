import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft, ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { Link, useParams } from "react-router";
import { Projects } from "../data/Projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = Projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="py-20 text-center max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-4">
          Project Not Found
        </h2>
        <Link to="/" className="text-sky-500 hover:underline">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-white my-8 flex items-center gap-2">
        <HugeiconsIcon
          className="text-zinc-900 dark:text-white"
          icon={ArrowLeft}
        />
        <Link
          to="/"
          className="hover:text-zinc-300 text-zinc-900 dark:text-white transition-colors"
        >
          Back to home
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-6 space-y-6">
          {project.img ? (
            <img
              src={project.img}
              className="w-full h-auto object-cover rounded-2xl shadow-sm"
              alt={project.title}
            />
          ) : (
            <div className="w-full h-64 bg-zinc-100 dark:bg-zinc-900 rounded-2xl flex items-center justify-center text-zinc-400 dark:text-zinc-600 font-semibold">
              No Image Available
            </div>
          )}
        </div>
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">
              {project.title}
            </h1>
            <ul className="text-base list-disc pl-5 space-y-2 text-zinc-400 font-normal">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-white">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="rounded-md bg-zinc-100 dark:bg-zinc-900 dark:text-white px-3 py-1 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            {project.demoURL && (
              <a
                href={project.demoURL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-sky-600"
              >
                Live Preview
                <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
