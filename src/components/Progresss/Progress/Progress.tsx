"use client"
import * as React from "react"
import { Progress } from "@/components/ui/progress"
export function ProgressDemo({ value, className }: { value: number, className: string }) {
    const [progress, setProgress] = React.useState(0)



    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(value), 500)
        return () => clearTimeout(timer)
    }, [])
    return <Progress value={progress} className={`${className}`} />
}
