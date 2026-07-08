import { Email, GithubIcon, Linkedin02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const Hero = () => {
  return (
    <section className="mt-10">
      <div className="flex justify-center items-center mb-4">
        <img
          className="w-96"
          loading="lazy"
          src="/images/profileb.png"
          alt="profile argiiahm"
        />
      </div>
      <div className="mt-2">
        <div>
          <h1 className="text-4xl font-semibold dark:text-white">
            Argi Ahmes Halepiyandra
          </h1>
          {/* Bio */}
          <div className="text-zinc-700 dark:text-white">
            <p className="mb-2">18 years old, he/him</p>
            <p>
              A passionate Software Developer with a strong interest in web
              technologies and digital product development.
            </p>
          </div>
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
