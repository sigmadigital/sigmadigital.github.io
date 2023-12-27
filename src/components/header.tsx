'use client'
import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";

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

      <NavbarContent justify="end">
        <NavbarItem>
          <Button color="success" href="#" variant="flat">
            Get in touch
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
