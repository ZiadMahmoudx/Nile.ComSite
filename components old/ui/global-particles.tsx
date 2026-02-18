'use client'

import { ParticleNetwork } from '@/components/ui/particle-network'

export function GlobalParticles() {
    return (
        <div className="fixed inset-0 pointer-events-none z-[5]">
            <ParticleNetwork
                particleCount={60}
                particleColor="rgba(159, 34, 32, 0.5)"
                lineColor="rgba(159, 34, 32, 0.1)"
                maxDistance={120}
                speed={0.2}
            />
        </div>
    )
}
