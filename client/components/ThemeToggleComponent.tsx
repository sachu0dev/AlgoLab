"use client";

import * as React from "react";
import {MonitorCog, Moon, Sun} from "lucide-react";
import {useTheme} from "next-themes";
export function ThemeToggle() {
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <button className="relative p-2 rounded-md" onClick={toggleTheme}>
      {theme === "light" && <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-500" />}
      {theme === "dark" && <Moon className="h-[1.2rem] w-[1.2rem] text-gray-400" />}
      {theme === "system" && (
        <MonitorCog
          className={`h-[1.2rem] w-[1.2rem] text-yellow-500 ${
            theme === "system" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
          } ${theme === "light" ? "text-yellow-500" : "text-gray-400"}`}
        />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
