import { Email, GithubIcon, Linkedin02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const Hero = () => {
  return (
    <section className="mt-10">
      <span className="text-zinc-400">hello there👋, I'm</span>
      <div className="mt-2">
        <h1 className="text-4xl font-semibold dark:text-white">
          Argi Ahmes Halepiyandra
        </h1>
        {/* Bio */}
        <div className="text-zinc-700 dark:text-white">
          <p>18 years old, he/him</p>
          <p>
            Fresh graduate SMK Rekayasa Perangkat Lunak yang memiliki minat dan
            fokus dalam membangun aplikasi web modern dan scalable.
          </p>
        </div>
        {/* CTA */}
        <div className="mt-2 flex items-center gap-6">
          {/* CV */}
          <div>
            <a
              href="https://drive.google.com/file/d/1UKKjPUpJU1i5uLj0xsAm88PWEO3_kCbb/view?usp=sharing"
              target="_blank"
              className="bg-zinc-900 px-4 py-1 text-white rounded-md cursor-pointer"
            >
              View cv
            </a>
          </div>
          {/*  */}
          <div className="flex items-center gap-6">
            <a
              className="dark:text-white"
              href="mailto:argiigmg@email.com"
              target="_blank"
            >
              <HugeiconsIcon size={20} icon={Email} />
            </a>
            <a
              className="dark:text-white"
              href="https://github.com/Argiiahm"
              target="_blank"
            >
              <HugeiconsIcon size={20} icon={GithubIcon} />
            </a>
            <a
              className="dark:text-white"
              href="https://www.linkedin.com/in/argi-ahmes-halepiyandra-6b4403329"
              target="_blank"
            >
              <HugeiconsIcon size={20} icon={Linkedin02Icon} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
