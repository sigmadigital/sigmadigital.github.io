import { Section } from "@/components/section";


import { Books, MoonStars, Network, Planet } from "@phosphor-icons/react";
import { green } from "tailwindcss/colors";
import Repository from "@/components/repository";
import { Link } from "@nextui-org/react";


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
        <div className="flex flex-col mb-4 md:inline-grid md:grid-cols-2 md:gap-4">
          {repositories.map((repository, index) => (
            <Repository key={index} id={index} icon={repository.icon} name={repository.name} />
          ))}
        </div>
        <div className="w-100 flex flex-row items-center justify-center">
          <Link
            isExternal
            showAnchorIcon
            href="https://github.com/teofilosalgado"
            aria-label="Github link"
            color="success"
          >
            But there are many more to be found in my GitHub profile
          </Link>
        </div>
      </div>
    </Section>
  );
}