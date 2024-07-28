'use client';
import Experience from "@/components/experience";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Skill from "@/components/skill";
import Project from "@/layouts/projects/project";

export default function Home() {

  return (
    <main>
      <Header />
      <Hero />
      <Skill />
      <Experience />
      <Project />
    </main>
  );
}
