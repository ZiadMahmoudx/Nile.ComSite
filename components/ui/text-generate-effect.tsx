'use client'

import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { cn } from '@/lib/utils'

export const TextGenerateEffect = ({
    words,
    className,
}: {
    words: string
    className?: string
}) => {
    const scope = useAnimation()
    const wordsArray = words.split(' ')

    useEffect(() => {
        scope.start((i) => ({
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration: 0.5, delay: i * 0.1 },
        }))
    }, [scope])

    const renderWords = () => {
        return (
            <motion.div className="inline-block">
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            custom={idx}
                            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                            animate={scope}
                            className={cn('inline-block mr-2 text-foreground opacity-0', className)}
                        >
                            {word}
                        </motion.span>
                    )
                })}
            </motion.div>
        )
    }

    return (
        <div className={cn('font-bold', className)}>
            <div className="mt-4">
                <div className="leading-snug tracking-wide">
                    {renderWords()}
                </div>
            </div>
        </div>
    )
}
