import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "react-router";

type Project = {
  img?: string;
  title: string;
  slug: string;
  demoURL?: string;
  githubURL?: string;
  features: string[];
  techStack: string[];
};

const ProjectCard = ({
  img,
  title,
  slug,
  demoURL,
  features,
  techStack,
}: Project) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between">
      <div>
        {img ? (
          <Link to={`/project/${slug}`}>
            <img
              src={img}
              alt={title}
              loading="lazy"
              className="h-44 w-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
            />
          </Link>
        ) : (
          <Link to={`/project/${slug}`}>
            <div className="h-44 w-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-400 dark:text-zinc-600 font-semibold cursor-pointer">
              No Image
            </div>
          </Link>
        )}

        <div className="p-4">
          <Link
            to={`/project/${slug}`}
            className="hover:text-sky-500 transition-colors"
          >
            <h3 className="text-lg font-semibold dark:text-white line-clamp-1">
              {title}
            </h3>
          </Link>

          <ul className="mt-2 space-y-1 text-sm text-zinc-500 dark:text-zinc-400">
            {features.slice(0, 3).map((feature, i) => (
              <li key={i} className="line-clamp-1">
                • {feature}
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap gap-2">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="rounded-md bg-zinc-100 dark:bg-zinc-900 dark:text-white px-2 py-1 text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 pt-0">
        <div className="mt-2 grid grid-cols-2 gap-2">
          <Link
            to={`/project/${slug}`}
            className="flex items-center justify-center rounded-lg border border-zinc-300 dark:border-zinc-700 py-2 text-xs font-medium dark:text-white transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            Detail
          </Link>

          <a
            href={demoURL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 rounded-lg bg-sky-500 py-2 text-xs font-medium text-white transition hover:bg-sky-600"
          >
            Preview
            <HugeiconsIcon icon={ArrowUpRight01Icon} size={12} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
