"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { FiSun, FiMoon } from "react-icons/fi"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isChanging, setIsChanging] = React.useState(false)

  // After mounting, we have access to the theme
  React.useEffect(() => setMounted(true), [])

  // Handle theme toggle with explicit theme setting and visual feedback
  const toggleTheme = React.useCallback(() => {
    setIsChanging(true)
    const newTheme = resolvedTheme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    
    // Add a small delay to show the transition effect
    setTimeout(() => {
      setIsChanging(false)
    }, 300)
  }, [resolvedTheme, setTheme])

  // Log the current theme for debugging
  React.useEffect(() => {
    if (mounted) {
      console.log("Current theme:", resolvedTheme)
    }
  }, [mounted, resolvedTheme])

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
      className={`rounded-full p-2 ${isChanging ? 'animate-pulse' : ''} ${resolvedTheme === "dark" 
        ? 'bg-gray-700 hover:bg-gray-600 ring-1 ring-gray-600' 
        : 'bg-gray-200 hover:bg-gray-300 ring-1 ring-gray-300'} 
        transition-all duration-300 shadow-md`}
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
