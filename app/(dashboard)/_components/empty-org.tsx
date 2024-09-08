import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { CreateOrganization} from "@clerk/nextjs"
import Image from "next/image"

export const EmptyOrg = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <Image
            src={"/elements.svg"}
            alt="Empty org"
            width={200}
            height={200}
            />
            <h1 className="text-2xl font-semibold mt-4">Welcome to collabratix</h1>
            <p className="text-lg font-semibold mt-4">You don't have any organizations yet</p>
            {/* <div className="mt-6"> */}
            <Dialog>
                <DialogTrigger asChild>
                    <button className="mt-4 bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded">
                        Create an organization
                    </button>
                </DialogTrigger>
                <DialogContent className="p-0 bg-transparent border-none max-w-[480px] ">
                    <CreateOrganization routing="hash" />
                </DialogContent>
            </Dialog>
            {/* </div> */}
        </div>
    )
}