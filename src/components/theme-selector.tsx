"use client"

import { Check } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const themes = [
  {
    name: "Default",
    id: "default",
    primaryColor: "#0284c7",
  },
  {
    name: "Angkor Wat",
    id: "angkor",
    primaryColor: "#032588",
  },
  {
    name: "Cambodian Flag",
    id: "cambodia",
    primaryColor: "#e8505b",
  },
  {
    name: "Mekong River",
    id: "mekong",
    primaryColor: "#00a19a",
  },
  {
    name: "Khmer Gold",
    id: "khmer",
    primaryColor: "#f7b538",
  },
  {
    name: "Royal Purple",
    id: "royal",
    primaryColor: "#7b2cbf",
  },
]

export function ThemeSelector() {
  const { theme: currentTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <Button variant="outline">Select Theme</Button>
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          <span>{themes.find((theme) => theme.id === currentTheme)?.name || "Default Theme"}</span>
          <div
            className="h-4 w-4 rounded-full"
            style={{
              backgroundColor: themes.find((theme) => theme.id === currentTheme)?.primaryColor || "#0284c7",
            }}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme.id}
            onClick={() => setTheme(theme.id)}
            className="flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full" style={{ backgroundColor: theme.primaryColor }} />
              <span>{theme.name}</span>
            </div>
            {currentTheme === theme.id && (
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2 }}>
                <Check className="h-4 w-4" />
              </motion.div>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

