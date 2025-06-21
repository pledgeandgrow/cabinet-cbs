"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { FiSun, FiMoon } from "react-icons/fi"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // After mounting, we have access to the theme
  React.useEffect(() => setMounted(true), [])

  // Handle theme toggle with explicit theme setting
  const toggleTheme = React.useCallback(() => {
    if (resolvedTheme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }, [resolvedTheme, setTheme])

  if (!mounted) {
    return (
      <button
        className="rounded-full p-2 bg-gray-200 dark:bg-gray-800 transition-all duration-300"
        aria-label="Toggle theme"
        disabled
      >
        <div className="h-5 w-5" />
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full p-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 shadow-sm"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <FiSun className="h-5 w-5 text-yellow-400" />
      ) : (
        <FiMoon className="h-5 w-5 text-gray-700" />
      )}
    </button>
  )
}
