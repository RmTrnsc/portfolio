"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import { useState, useEffect } from "react";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDark);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);

  return (
    <header className="flex items-center justify-between">
      <h1 className="flex items-center gap-2">
        <img
          src="/photo.jpeg"
          alt="profile picture"
          width={50}
          height={50}
          className="rounded-4xl"
        />
        <p className="flex flex-col">
          <span className="font-header font-extrabold text-3xl tracking-widest">
            Romain Tournesac
          </span>
          <small className="italic">Développeur web fullstack</small>
        </p>
      </h1>
      <div>
        <label className="swap swap-rotate">
          <input type="checkbox" />
          <SunIcon
            className="swap-on size-6"
            onClick={() => setIsDarkMode(true)}
          />

          <MoonIcon
            className="swap-off size-6"
            onClick={() => setIsDarkMode(false)}
          />
        </label>
      </div>
    </header>
  );
}
