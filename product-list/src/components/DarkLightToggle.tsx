"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { CgDarkMode } from "react-icons/cg";

export default function DarkLightToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const alt = "change theme";

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <CgDarkMode
        className="size-7 cursor-pointer md:size-9"
        title="loading theme"
        ria-hidden="true"
      />
    );
  }

  if (resolvedTheme === "dark") {
    return (
      <FiSun
        className="size-7 cursor-pointer md:size-9"
        title={alt}
        onClick={() => setTheme("light")}
      />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <FiMoon
        className="size-7 cursor-pointer md:size-9"
        title={alt}
        onClick={() => setTheme("dark")}
      />
    );
  }
}
