import { Section } from "@/components/section";


import { Books, MoonStars, Network, Planet } from "@phosphor-icons/react";
import { green } from "tailwindcss/colors";
import Repository from "@/components/repository";
import { Link } from "@nextui-org/react";
import { useTheme } from "next-themes";


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

  const { theme } = useTheme();

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
            aria-label="Visit my Github profile"
            className={`text-lg ${theme === "dark" ? "text-green-400" : "text-green-800"}`}
          >
            Check out my GitHub profile for more awesome projects
          </Link>
        </div>
      </div>
    </Section>
  );
}