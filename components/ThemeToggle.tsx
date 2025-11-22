"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <button className="h-6 w-6 opacity-0 cursor-default" disabled />;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
      className="p-2 cursor-pointer rounded-md"
      aria-label="Toggle Theme"
    >
      {currentTheme === "light" ? (
        <Moon className="text-gray-800 h-5 w-5 toggleTheme" />
      ) : (
        <Sun className="text-white h-5 w-5 toggleTheme" />
      )}
    </button>
  );
}
