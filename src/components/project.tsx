import { Section } from "@/components/section";


import { Books, GithubLogo, MoonStars, Network, Planet } from "@phosphor-icons/react";
import { green } from "tailwindcss/colors";
import Repository from "@/components/repository";
import { Button, Link } from "@nextui-org/react";


export default function Skill() {
  const repositories = [
    {
      icon: <MoonStars size={64} color={green[600]} weight="duotone" />,
      name: "teofilosalgado/star-chart"
    },
    {
      icon: <Books size={64} color={green[600]} weight="duotone" />,
      name: "teofilosalgado/hsk-worksheet-generator"
    },
    {
      icon: <Network size={64} color={green[600]} weight="duotone" />,
      name: "teofilosalgado/OpenConnectSharp"
    },
    {
      icon: <Planet size={64} color={green[600]} weight="duotone" />,
      name: "teofilosalgado/esa-tpm-ds-catalog"
    }
  ];

  return (
    <Section title="Projects" id="project">
      <div>
        <div className="mb-2">
          Here are some of my favorite personal projects:
        </div>
        <div className="flex flex-col mb-4 md:grid md:grid-cols-2 md:gap-4">
          {repositories.map((repository, index) => (
            <Repository key={index} id={index} icon={repository.icon} name={repository.name} />
          ))}
        </div>
        <Button size="lg" fullWidth variant="light" className="flex-1 h-12" color="success" endContent={<GithubLogo size={28} />} as={Link} href="https://github.com/teofilosalgado" aria-label="Github link">
          But there are many more to be found in my GitHub profile
        </Button>
      </div>
    </Section>
  );
}