import { cn } from '@/lib/utils'

interface GlassmorphismCardProps {
  children: React.ReactNode
  className?: string
  blur?: 'sm' | 'md' | 'lg' | 'xl'
  intensity?: 'sm' | 'md' | 'lg'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'
  border?: boolean
  backgroundOpacity?: number
}

const intensityClasses = {
  sm: 'bg-white/10',
  md: 'bg-white/20',
  lg: 'bg-white/30'
}

const blurClasses = {
  sm: 'backdrop-blur-sm',
  md: 'backdrop-blur-md',
  lg: 'backdrop-blur-lg',
  xl: 'backdrop-blur-xl'
}

const roundedClasses = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  '3xl': 'rounded-3xl',
  full: 'rounded-full'
}

export function GlassmorphismCard({
  children,
  className = '',
  blur = 'md',
  intensity = 'md',
  rounded = 'xl',
  border = true,
  backgroundOpacity = 0.1
}: GlassmorphismCardProps) {
  const borderClass = border ? 'border border-white/20 border-t-white/30 border-l-white/30' : ''
  
  return (
    <div 
      className={cn(
        'relative p-1',
        roundedClasses[rounded],
        'before:absolute before:inset-0 before:rounded-inherit before:z-[-1] before:bg-gradient-to-br before:from-white/10 before:to-transparent',
        'dark:before:from-white/5 dark:before:to-transparent',
        className
      )}
      style={{ '--glass-opacity': backgroundOpacity } as React.CSSProperties}
    >
      <div 
        className={cn(
          intensityClasses[intensity],
          blurClasses[blur],
          roundedClasses[rounded],
          borderClass,
          'relative w-full h-full',
          'bg-clip-padding',
          'shadow-sm shadow-white/10',
          'dark:shadow-black/10'
        )}
      >
        {children}
      </div>
    </div>
  )
}