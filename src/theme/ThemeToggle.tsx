"use client";
// src/components/ThemeToggle.tsx
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
    const { setTheme, theme } = useTheme()
    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark")
            }}>
            <Sun
                size={20}
                className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon
                size={20}
                className="absolute rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle Theme</span>
        </Button>

    )
}