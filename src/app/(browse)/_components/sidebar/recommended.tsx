"use client"
import { User } from "@prisma/client";

import { useSiderbar } from "../../../../../store/use-sidebar";

import { UserIremSkeleton, UserItem } from "./user-item";


interface RecommendedProps {
    data: User[];
}
export const Recommended = ({
    data,
}: RecommendedProps) =>{
    const { collapsed } = useSiderbar((state) => state);

    const showLabel = !collapsed && data.length > 0;
    return (
        <div>
            {
                showLabel && (
                    <div className="pl-6 mb-4">
                        <p className="text-sm text-muted-foreground">
                            Recommend
                        </p>
                    </div>
                )
            }
            <ul className="space-y-2 px-2">
                {
                    data.map((user) => (
                        <UserItem  
                            key={ user.id }
                            username={user.username}
                            imageUrl={user.imageUrl}
                            isLive={true}               
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export const RecommendSkeleton = () =>{
    return(
        <ul className="px-2">
            {
                [...Array(3)].map((_, i) =>(
                    <UserIremSkeleton key={i}></UserIremSkeleton>
                )) 
            }
        </ul>
    )
}