"use client";
import Navbar from "@/components/Navbar";
import TypeGen from "@/components/TypeGen";
import Projects from "@/components/Projects";

export default function About() {
  return (
    <main className="bg-white dark:bg-black min-h-screen flex flex-col items-center justify-start transition-colors duration-500">
      <Navbar />
      <div className="flex flex-col mt-16 items-center">
        <TypeGen text="Projects" />
      </div>
      <div className="mt-8 flex justify-center w-full">
        <Projects />
      </div>
    </main>
  );
}
