"use client";
import Image from "next/image";
import{
    useOrganizationList,
    useOrganization,
} from "@clerk/nextjs";
import { cn } from "@/lib/utils";

interface ItemProps {
    id: string;
    name: string;
    imageUrl: string;
}

export const Items = ({
    id,
    name,
    imageUrl,
}: ItemProps) => {
    const {  organization } = useOrganization();
    const { setActive} = useOrganizationList();
    const isActive = organization?.id === id;
    const onClick = () => {
        if (isActive) return;

        setActive && setActive({organization: id});
    };
    return (
        <div className="aspect-sqaure relative">
            <Image
                fill
                src={imageUrl}
                alt={name}
                onClick={onClick}
                className={cn(
                    "rounded-md",
                    "cursor-pointer",
                    "opacity-75",
                    "hover:opacity-100",
                    "transition",
                    isActive && "opacity-100"
                )}
            />
        </div>
    )
    }
