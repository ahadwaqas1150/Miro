"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import{useApiMutation} from "@/hooks/use-api-mutation";
import { toast } from "sonner";


export const EmptyBoard = () =>{
    const {organization} = useOrganization();
    const {mutate, pending} = useApiMutation(api.board.create); 
    const onClick = () =>{
      if(!organization){
        return;
      }
        mutate({
            orgId: organization.id,
            title: "New Board",
        })
        .then((id) =>{
          toast.success("Board created successfully");
          console.log("Board created with id", id);
        })
        .catch((error) => toast.error("Failed to create board"));
    }

  return (
    <div className=" h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/note.svg"
        alt="Empty search"
        width={110}
        height={110}
      />
      <h2 className="text-lg font-semibold text-gray-700">
        No Boards found
      </h2>
      <p className="text-sm text-gray-500">
        Try creating a new board
      </p>
      <div className="mt-6">
        <Button  disabled={pending} onClick={onClick} size="lg">
          Create Board
        </Button>
      </div>
    </div>
  );
}