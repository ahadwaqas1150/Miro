"use client";

import Link from "next/link";
import Image from "next/image";
import { Overlay } from "./overlay";
import { formatDistanceToNow } from "date-fns";
import { useAuth } from "@clerk/nextjs"; 
import { Footer } from "./footer";
import { Skeleton } from "@/components/ui/skeleton";
import { Actions } from "../actions";
import { MoreHorizontal } from "lucide-react";


interface BoardCardProps {
    id: string;
    title: string;
    imageUrl: string;
    authorId: string;
    authorName: string;
    createdAt: number;
    orgId: string;
    isFav: boolean;
}
export const BoardCard = ({
    id,
    title,
    imageUrl,
    authorId,
    authorName,
    createdAt,
    orgId,
    isFav
}: BoardCardProps) => {
    const { userId } = useAuth();
    const authorLabel = userId === authorId? "You" : authorName;
    const createdAtLabel = formatDistanceToNow(createdAt, { addSuffix: true  });

    return (
            <Link href={`/board/${id}`}>
                <div className="group aspect-[100/127] border rounded-lg flex
                flex-col justify-between overflow-hidden">
                    <div className="relative flex-1 bg-amber-50">
                        <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-fit"
                        />
                        <Overlay />
                        <Actions id={id} title={title} side="bottom" >
                            <button className="absolute top-1 right-1 opacity-0 
                                group-hover:opacity-100 transition-opacity px-3 py-2 outline-none">
                                <MoreHorizontal
                                className="text-white opacity-75 
                                hover:opacity-100 transition-opacity"
                                />
                            </button>
                        </Actions>
                    </div>
                    
                    <Footer 
                    isFavorite={isFav}
                    authorLabel={authorLabel}
                    createdAtLabel={createdAtLabel}
                    title={title}
                    onClick={() => console.log("clicked")}
                    disabled={false}
                    />
                </div>
            
            </Link>
    )
}
BoardCard.skeleton = function BoardCardSkeleton() {
    return (
        <div className="aspect-[100/127] border rounded-lg overflow-hidden">
            <Skeleton className="flex-1 bg-slate-300 h-full w-full" />
                
        </div>
    )
}