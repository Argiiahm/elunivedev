import ExperienceCard from "../components/ExperienceCard";
import { Experiences } from "../data/Experience";

const Experience = () => {
  return (
    <section id="experience" className="mt-10">
      <span className="font-medium dark:text-white">experience</span>
      {Experiences.map((experience, i) => (
        <ExperienceCard
          key={i}
          title={experience.title}
          location={experience.location}
          date={experience.date}
          company={experience.company}
          description={experience.description}
          techStack={experience.techStack}
        />
      ))}
    </section>
  );
};

export default Experience;
