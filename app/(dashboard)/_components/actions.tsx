"use client";

import {  DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import {
    DropdownMenu,
    DropdownMenuTrigger ,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    } from "@/components/ui/dropdown-menu";
import { Link2, PenBoxIcon, Pencil, Share, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { ConfirmModal } from "./confirm-modal";
import { Button } from "@/components/ui/button";
import { useRenameModal } from "@/hooks/use-rename-modal";

interface Actionsprops {
    children: React.ReactNode;
    side?: DropdownMenuContentProps["side"];
    sideOffset?: DropdownMenuContentProps["sideOffset"];
    id: string;
    title: string;
};

export const Actions = ({
    children,
    side ,
    sideOffset,
    id,
    title,
}: Actionsprops) => {

    const {mutate,pending} = useApiMutation(api.board.remove);
    const { onOpen} = useRenameModal();

    const handleCopyLink = () => {
        navigator.clipboard.writeText(`${window.location.origin}/board/${id}`)
        .then (() => { toast.success("Link copied to clipboard") })
        .catch(() => { toast.error("Failed to copy link to clipboard") });
    }

const handleDelete = () => {
    mutate({id})
    .then(() => { toast.success("Board deleted") })
    .catch(() => { toast.error("Failed to delete board") });
}


    return (
        <div className="absolute z-100 top-1 right-1">
            <DropdownMenu>
                <DropdownMenuTrigger>
                        {children}
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                side={side}
                sideOffset={sideOffset}
                onClick={(e) => e.stopPropagation()}
                className="bg-slate-300 shadow-lg rounded-lg p-2"
                >
                    <DropdownMenuItem className="p-3 cursor-pointer" onClick={handleCopyLink}>
                        <Link2 size={24} className="mr-2" />
                        copy link
                    </DropdownMenuItem>
                    <DropdownMenuItem className="p-3 cursor-pointer"
                    onClick={() => onOpen(id,title)}
                    >
                        <Pencil size={24} className="mr-2" />
                        Rename
                    </DropdownMenuItem>
                    <ConfirmModal 
                    header="Delete board"
                    description={`Are you sure you want to delete ${title}?`}
                    disabled={pending}
                    onConfirm={handleDelete}
                    >
                    <Button variant={"ghost"} className="p-3 cursor-pointer text-sm w-full
                        justify-start font-normal">
                        <Trash2 size={24} className="mr-2" />
                        Delete
                    </Button>
                    </ConfirmModal>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="p-3 cursor-pointer">
                        <Share size={24} className="mr-2" />
                        share
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};