'use client'
import Header from "@/components/header";
import Hero from "@/components/hero";
import { Section } from "@/components/section";

import Skill from "@/components/skill";


export default function Home() {

  return (
    <main>
      <Header />
      <Hero />
      <Skill />
      <Section title="Work experience"></Section>
    </main>
  )
}
