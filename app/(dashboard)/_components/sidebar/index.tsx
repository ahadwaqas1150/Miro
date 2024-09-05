import Link from "next/link";
import { NewButton } from "./new-button";
import { List } from "./list";

export const Sidebar = () => {
    return (
        <aside className="fixed h-full bg-gray-800 z-[1] left-0 w-[60px] felx p-3 flex-col gap-y-4 text-white">
            <List />
            <NewButton />
        </aside>
    );
}