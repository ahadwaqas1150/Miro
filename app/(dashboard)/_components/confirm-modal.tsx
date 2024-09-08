"use client";

import { AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import exp from "constants";

interface ConfirmModalProps {
    children: React.ReactNode;
    onConfirm: () => void;
    header: string;
    description: string;
    disabled?: boolean;
}

export const ConfirmModal = ({
    children,
    onConfirm,
    header,
    description,
    disabled ,
}: ConfirmModalProps) => {
    const handleConfirm = () => {
        onConfirm();
    }
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{header}</AlertDialogTitle>
                <AlertDialogDescription>
                    {description}
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleConfirm} disabled={disabled}>
                        Confirm
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}