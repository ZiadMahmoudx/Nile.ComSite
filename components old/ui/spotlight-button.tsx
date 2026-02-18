'use client'

import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const spotlightButtonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90',
  {
    variants: {
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

export interface SpotlightButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof spotlightButtonVariants> {
  asChild?: boolean
}

const SpotlightButton = React.forwardRef<HTMLButtonElement, SpotlightButtonProps>(
  ({ className, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(spotlightButtonVariants({ size, className }), 'group')}
        ref={ref}
        onMouseMove={(e) => {
          const { currentTarget: target } = e;
          const rect = target.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          target.style.setProperty('--x', `${x}px`);
          target.style.setProperty('--y', `${y}px`);
        }}
        style={{
          '--x': '0px',
          '--y': '0px',
        } as React.CSSProperties}
        {...props}
      >
        <span className="relative z-10">{props.children}</span>
        <div
          className="absolute -inset-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            transform: 'translate(calc(var(--x) - 50%), calc(var(--y) - 50%))',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
      </Comp>
    )
  }
)

SpotlightButton.displayName = 'SpotlightButton'

export { SpotlightButton, spotlightButtonVariants }