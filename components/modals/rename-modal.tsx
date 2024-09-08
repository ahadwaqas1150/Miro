"use client";

import { FormEventHandler, useEffect, useState } from "react";
import { Dialog ,
    DialogHeader,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogFooter,
    DialogClose,
} from "../ui/dialog";

import { useRenameModal } from "@/hooks/use-rename-modal";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

export const RenameModal = () => {
    const { innitialValues, isOpen, onClose } = useRenameModal();
    const [title, setTitle] = useState(innitialValues.title);
    useEffect(() => {
        setTitle(innitialValues.title);
    }, [innitialValues.title]);

    const {mutate,pending} = useApiMutation(api.board.update);

    const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        mutate({id:innitialValues.id, title})
        .then(() => {
            toast.success("Board renamed successfully");
            onClose();
        })
        .catch(() => {
            toast.error("Failed to rename board");
        });
    };
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
            <DialogHeader>
                <DialogTitle>Rename board</DialogTitle>
                <DialogClose />
            </DialogHeader>
                <DialogDescription>
                    Rename your board
                </DialogDescription>
                <form onSubmit={onSubmit} className="space-y-4">
                    <Input
                        disabled={pending}
                        required
                        type="text"
                        maxLength={60}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="input"
                    />
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type="button" variant={"outline"}>
                                Cancel
                            </Button>
                        </DialogClose>
                        <Button type="submit" disabled={pending}>
                            Rename
                        </Button>
                    </DialogFooter>

                </form>
            
            </DialogContent>
        </Dialog>
    );
}

