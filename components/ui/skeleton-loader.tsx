import { cn } from '@/lib/utils'

interface SkeletonProps {
    className?: string
}

export function Skeleton({ className }: SkeletonProps) {
    return (
        <div
            className={cn(
                'animate-pulse rounded-md bg-muted',
                className
            )}
        />
    )
}

export function CardSkeleton() {
    return (
        <div className="rounded-xl border-2 border-border bg-card p-6 space-y-4">
            <Skeleton className="h-12 w-12 rounded-xl" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <div className="flex gap-2 pt-2">
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-3 w-16" />
            </div>
        </div>
    )
}

export function HeroSkeleton() {
    return (
        <div className="min-h-[90vh] flex items-center justify-center p-8">
            <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16">
                <div className="space-y-8">
                    <Skeleton className="h-8 w-48 rounded-full" />
                    <div className="space-y-4">
                        <Skeleton className="h-16 w-full" />
                        <Skeleton className="h-16 w-3/4" />
                        <Skeleton className="h-12 w-2/3" />
                    </div>
                    <Skeleton className="h-6 w-full max-w-xl" />
                    <div className="flex gap-4">
                        <Skeleton className="h-14 w-40 rounded-xl" />
                        <Skeleton className="h-14 w-36 rounded-xl" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                </div>
            </div>
        </div>
    )
}

export function PageSkeleton() {
    return (
        <div className="min-h-screen p-8 space-y-8">
            {/* Hero skeleton */}
            <div className="text-center space-y-4 py-20">
                <Skeleton className="h-8 w-32 mx-auto rounded-full" />
                <Skeleton className="h-16 w-96 mx-auto" />
                <Skeleton className="h-6 w-[32rem] mx-auto" />
            </div>

            {/* Cards skeleton */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                    <CardSkeleton key={i} />
                ))}
            </div>
        </div>
    )
}
