"use client";
import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Star } from "lucide-react";
import { useSearchParams } from "next/navigation";

const font = Poppins({
    subsets: ["latin"],
    weight: [ "600"],
});

export const  OrgSidebar = () => {
    const searcParams = useSearchParams();
    const favorites = searcParams.get("favorites");
    return (
        <>
        <div className="hidden  lg:flex flex-col space-y-6 w-[206px] pl-5
        pt-5 bg-transparent">
            <Link href="/">
                <div className="aspect-square relative h-8 p-3">
                    <Image
                        
                        src="/collabratix.svg"
                        alt="Logo"
                        className="rounded-md cursor-pointer
                        opacity-75 hover:opacity-100 
                        transition"
                        height={60}
                            width={60}
                    />
                    <span className={cn(
                        "font-semibold text-2xl",
                        font.className
                    )}>
                        Board
                    </span>
                </div>
            </Link>
            <div className="pt-12">
            <OrganizationSwitcher 
            hidePersonal
            appearance={{
                    elements:{
                        rootBox: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                        },
                        organizationSwitcherTrigger: {
                            padding: "6px",
                            borderRadius: "8px",
                            border: "1px solid #E5E7EB",
                            width: "100%",
                            justifyContent: "space-between",
                            backgroundColor: "white",
                        }
                    }
                }
            }
            />
            </div>
            <div className="space-y-1 w-full">
                <Button
                variant={favorites?"secondary":"ghost"}
                asChild
                size="lg"
                className="font-normal juistify-start px-2 w-full"
                >
                    <Link href="/">
                        <LayoutDashboard className="h-4 w-4 mr-2" />
                        Team Boards
                    </Link>
                </Button>
                <Button
                variant={favorites?"ghost":"secondary"}
                asChild
                size="lg"
                className="font-normal juistify-start px-2 w-full"
                >
                    <Link href={{
                        pathname: "/",
                        query: { favorites: "true"},
                    }}>
                        <Star className="h-4 w-4 mr-2" />
                        FavBoards
                    </Link>
                </Button>
            </div>
        </div>
</>
)
}