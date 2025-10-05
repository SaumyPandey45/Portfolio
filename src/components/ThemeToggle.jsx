import { useEffect } from "react";

export const ThemeToggle = () => {
  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add("dark");
  }, []);

  return null; // Nothing visible, just applies dark mode
};
