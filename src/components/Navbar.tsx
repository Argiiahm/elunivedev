import { Moon02Icon, Sun01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTheme } from "../hooks/useTheme";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex items-center justify-between text-zinc-900 dark:text-white">
      <span className="font-bold">elunivedev.</span>

      <nav className="flex items-center gap-4">
        <ul className="flex items-center gap-2">
          <li>
            <a href="#experience">experience</a>
          </li>
          <li>
            <a href="#project">project</a>
          </li>
        </ul>

        <button onClick={toggleTheme}>
          {/* cek theme */}
          <HugeiconsIcon
            icon={theme === "dark" ? Moon02Icon : Sun01Icon}
            size={20}
          />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
