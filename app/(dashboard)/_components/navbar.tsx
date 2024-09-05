"use client";

import { UserButton } from "@clerk/nextjs";

export const  Navbar = () => {
    return (
        <div className="flex  items-center bg-blue-500 gap-x-4 p-5 ">
            <div className="hidden lg:flex lg:flex-1 bg-yellow-500">
                Search
            </div>
                <UserButton />
        </div>
    )
    }