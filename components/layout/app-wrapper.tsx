'use client'

import { ReactNode } from 'react'

interface AppWrapperProps {
  children: ReactNode
}

export function AppWrapper({ children }: AppWrapperProps) {
  return (
    <div className="w-full min-h-screen">
      {children}
    </div>
  )
}