import { Section } from "@/components/section";


import { Books, Network, Planet } from "@phosphor-icons/react";
import { green } from "tailwindcss/colors";
import Repository from "@/layouts/projects/components/repository";


export default function Skill() {
  const repositories = [
    {
      icon: <Planet size={64} color={green[600]} weight="duotone" />,
      name: "teofilosalgado/star-chart"
    },
    {
      icon: <Books size={64} color={green[600]} weight="duotone" />,
      name: "teofilosalgado/hsk-worksheet-generator"
    },
    {
      icon: <Network size={64} color={green[600]} weight="duotone" />,
      name: "teofilosalgado/OpenConnectSharp"
    }
  ];

  return (
    <Section title="Projects" id="project">
      <div className="flex flex-col mt-4 md:grid md:grid-cols-2 md:gap-4">
        {repositories.map((repository, index) => (
          <Repository key={index} icon={repository.icon} name={repository.name} />
        ))}
      </div>
    </Section>
  );
}