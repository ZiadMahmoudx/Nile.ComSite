import React from 'react'

interface AnimatedCaptionProps {
    text: string
    className?: string
}

export const AnimatedCaption = ({ text, className }: AnimatedCaptionProps) => {
    const letters = text.split('').map((char, i) => (
        <span key={i} className="btn-anim__letter">
            {char.trim() === '' ? '\u00A0' : char}
        </span>
    ))

    return (
        <span className={`btn-caption ${className || ''}`} data-static-anim="true">
            <div className="btn-anim__block">{letters}</div>
            <div className="btn-anim__block">{letters}</div>
        </span>
    )
}
