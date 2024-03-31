'use client'
import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { GithubLogo, LinkedinLogo, PaperPlaneTilt } from "@phosphor-icons/react";

import { Theme } from "@/components/theme";
export default function Header() {

  return (
    <Navbar className="mt-0 sm:-mt-16">
      <NavbarContent>
        <NavbarBrand>
          <p className="font-bold text-inherit mr-2">João Victor</p>
          <Theme />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="cursor-pointer" color="foreground" underline="hover" onPress={() => document?.getElementById("hero")?.scrollIntoView()}>
            About
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link className="cursor-pointer" color="foreground" underline="hover" onPress={() => document?.getElementById("skill")?.scrollIntoView()}>
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="cursor-pointer" color="foreground" underline="hover" onPress={() => document?.getElementById("experience")?.scrollIntoView()}>
            Work Experience
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-4" justify="end">
        <NavbarItem>
          <div className="flex flex-row mt-2">
            <Button isIconOnly as={Link} color="success" href="https://github.com/teofilosalgado" variant="flat">
              <GithubLogo size={28} />
            </Button>
            <Button isIconOnly as={Link} className="ml-4" color="success" href="https://www.linkedin.com/in/teofilosalgado/" variant="flat">
              <LinkedinLogo size={28} />
            </Button>
            <Button isIconOnly as={Link} className="ml-4" color="success" href="mailto:jvictorteo2000@hotmail.com" variant="flat">
              <PaperPlaneTilt size={28} />
            </Button>
          </div>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
