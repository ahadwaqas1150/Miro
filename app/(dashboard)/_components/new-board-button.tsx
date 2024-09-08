"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { title } from "process";
import { toast } from "sonner";

interface NewBoardButtonProps {
    orgId: string;
    disabled: boolean;
}

export const NewBoardButton = (
    { orgId, disabled }: NewBoardButtonProps) => {
        const {mutate, pending} = useApiMutation(api.board.create);
        const onClick = () => {
            mutate({
                orgId,
                title:"New Board"}
            )
            .then(() => {
                toast.success("Board created successfully");
            })
            .catch(() => {
                toast.error("Failed to create board");
        });
        }
    return (
        <div>
            <button className={cn(
                "col-span-1 w-full aspect-[100/127] bg-slate-400 rounded-lg hover:bg-slate-500 flex flex-col items-center justify-center py-6"
                ,( pending ||disabled) && "opacity-50 cursor-not-allowed hover:bg-slate-400"
                
                    
                    
                )}
                disabled={pending || disabled}
                onClick={onClick
                }
            >
                <div/>
                <Plus className="h-12 w-12 text-white stroke-1" />
                <p className="text-white text-sm mt-2">Create a new board</p>
            </button>
        </div>
    );
}