'use client';
import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { GithubLogo, LinkedinLogo, PaperPlaneTilt } from "@phosphor-icons/react";

import { Theme } from "@/components/theme";
export default function Header() {

  return (
    <Navbar className="mt-0 sm:-mt-16">
      <NavbarContent>
        <NavbarItem>
          <NavbarBrand>
            <p className="font-bold text-inherit mr-2">João Victor</p>
          </NavbarBrand>
        </NavbarItem>
        <NavbarItem>
          <Theme />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="cursor-pointer" color="foreground" underline="hover" aria-label="Scroll to about" onPress={() => document?.getElementById("hero")?.scrollIntoView()}>
            About
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link className="cursor-pointer" color="foreground" underline="hover" aria-label="Scroll to skills" onPress={() => document?.getElementById("skill")?.scrollIntoView()}>
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="cursor-pointer" color="foreground" underline="hover" aria-label="Scroll to work experience" onPress={() => document?.getElementById("experience")?.scrollIntoView()}>
            Work Experience
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="cursor-pointer" color="foreground" underline="hover" aria-label="Scroll to projects" onPress={() => document?.getElementById("project")?.scrollIntoView()}>
            Projects
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-4" justify="end">
        <NavbarItem>
          <Button isIconOnly as={Link} color="success" href="https://github.com/teofilosalgado" aria-label="Github link" variant="flat">
            <GithubLogo size={28} />
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button isIconOnly as={Link} color="success" href="https://www.linkedin.com/in/teofilosalgado/" aria-label="LinkedIn link" variant="flat">
            <LinkedinLogo size={28} />
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button isIconOnly as={Link} color="success" href="mailto:jvictorteo2000@hotmail.com" aria-label="Send an e-mail" variant="flat">
            <PaperPlaneTilt size={28} />
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
