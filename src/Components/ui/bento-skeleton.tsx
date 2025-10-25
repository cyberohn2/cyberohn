"use client"
import { BentoGrid } from "./bento-grid"
import { Skeleton } from "./skeleton"

const BentoSkeleton = () => {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
        {["1"].map((item, i) => (
            <Skeleton key={i} className={i === 3 || i === 6 ? "md:col-span-2 h-64" : "h-64"} />
        ))}
    </BentoGrid>
  )
}

export default BentoSkeleton
