'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="group">
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="group relative overflow-hidden h-[4rem] w-[4rem] border-2 border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-foreground transition-all duration-300"
    >
      <div className="relative h-[2.2rem] w-[2.2rem] transition-all duration-300 dark:-rotate-90 dark:scale-0">
        <Moon className="h-full w-full" />
        <span className="absolute top-0 right-0 -mt-1 -mr-1 text-[1rem] font-bold">+</span>
        <span className="absolute bottom-1 right-[0.1rem] text-[0.8rem] font-bold">+</span>
      </div>

      <Sun className="absolute h-[2.2rem] w-[2.2rem] rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
