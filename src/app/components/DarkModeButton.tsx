"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { IconSun, IconMoon } from "@douyinfe/semi-icons";
// import { useTheme } from "../hooks/useTheme";

export default function DarkModeButton() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? (
            <IconSun size="extra-large" />
          ) : (
            <IconMoon size="extra-large" />
          )}
        </button>
      )}
      
    </>
  );
}
