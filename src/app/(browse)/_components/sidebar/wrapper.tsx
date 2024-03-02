'use client'
import { useSiderbar } from "../../../../../store/use-sidebar";
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { ToggleSkeleton } from "./toggle";
import { RecommendSkeleton } from "./recommended";
import { useIsClient } from "usehooks-ts";

interface WrapperProps{
    children: React.ReactNode;
}

export const Wrapper = ({
    children,
}:WrapperProps) => {
    const { collapsed } = useSiderbar((state) => state)
    const isClient = useIsClient();


    if(!isClient) return (
        <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50">
            <ToggleSkeleton />
            <RecommendSkeleton />
        </aside>
    ) 
    return(
        <aside
            className={cn("fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35] z-50",
                        collapsed && "w-[70px]"
            )}
        >
            {children}
        </aside>
    )
}