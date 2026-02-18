'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    // Also set the color-scheme attribute on root for the template CSS vars
    document.documentElement.setAttribute('color-scheme', newTheme)
  }

  // Sync color-scheme attr on mount
  React.useEffect(() => {
    if (mounted && theme) {
      document.documentElement.setAttribute('color-scheme', theme)
    }
  }, [mounted, theme])

  if (!mounted) {
    return (
      <button
        className="mxd-color-switcher"
        type="button"
        role="switch"
        aria-label="light/dark mode"
        aria-checked="true"
      >
        <i className="ph-bold ph-moon-stars"></i>
      </button>
    )
  }

  return (
    <button
      className="mxd-color-switcher"
      type="button"
      role="switch"
      aria-label="light/dark mode"
      aria-checked={theme === 'dark' ? 'true' : 'false'}
      onClick={handleToggle}
    >
      {theme === 'dark' ? (
        <i className="ph-bold ph-sun-horizon"></i>
      ) : (
        <i className="ph-bold ph-moon-stars"></i>
      )}
    </button>
  )
}
