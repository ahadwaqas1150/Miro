import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterProps {
    isFavorite: boolean;
    authorLabel: string;
    createdAtLabel: string;
    title: string;
    onClick: () => void;
    disabled: boolean;
}

export const Footer = ({
    isFavorite,
    authorLabel,
    createdAtLabel,
    title,
    onClick,
    disabled
}: FooterProps) => {
    const handleFavorite = (
        e: React.MouseEvent<HTMLButtonElement , MouseEvent>) => {
        e.stopPropagation();
        e.preventDefault();
        onClick();
    }
    return (
        <div className="bg-white p-4 relative">
            <p className="text-[13px] truncate max-w-calc(100%-20px)]">
                {title}
            </p>
            <p className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px]
            text-muted-foreground truncate">
                {authorLabel} - {createdAtLabel}
            </p>
            <button
                onClick={handleFavorite}
                disabled={disabled}
                className={cn(
                    "absolute top-2 right-2",
                    "text-amber-500",
                    
                    "transition-colors",
                    "group-hover:opacity-100",
                    "opacity-0",
                    "group-hover:opacity-100",
                    "transition-opacity",
                    "focus:outline-none",
                    "disabled:cursor-not-allowed",
                    "disabled:opacity-50"
                )}
            >
                <Star size={20} className={cn(
                    "h-4 w-4 hover:fill-amber-500",
                    isFavorite && "fill-amber-500")}
                />
            </button>
        </div>
    )
}
