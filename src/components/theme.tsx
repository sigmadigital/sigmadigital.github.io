"use client";

import { Switch } from "@nextui-org/react";
import { Moon, Sun } from "@phosphor-icons/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Theme() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Switch
      size="lg"
      color="success"
      aria-label="Change theme switch"
      startContent={<Sun />}
      endContent={<Moon />}
      isSelected={theme === "light"}
      onValueChange={(isSelected: boolean) => isSelected ? setTheme('light') : setTheme('dark')}
    />
  )
};