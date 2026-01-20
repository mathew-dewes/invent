"use client";

import { Button } from "@/components/ui/button";
import { PurchaseStatus, RequestStatus } from "@/generated/prisma/enums";
import { massUpdatePurchase } from "@/lib/actions/purchase";
import { massUpdateRequests } from "@/lib/actions/request";
import { startTransition } from "react";
import { toast } from "sonner";


interface props {
  label: string
  table: "Requests" | "Purchases" 
  status: RequestStatus | PurchaseStatus
  selectedIds: string[]
}
export function MassUpdateButton({ label, table, status ,selectedIds }: props){

    return (
        <Button variant={"secondary"} size={"sm"} className="cursor-pointer hover:bg-primary"
        disabled={selectedIds.length === 0}
        onClick={()=>{
            startTransition(async()=>{
                try {
                    if (table === "Requests"){
                    await massUpdateRequests(selectedIds, status as RequestStatus);
                    
                    }
                    if (table === "Purchases"){
                    await massUpdatePurchase(selectedIds, status as PurchaseStatus);
                    
                    }
                 
                } catch (error) {
            console.error(error)
            toast.error("Failed to update entires")
                }
            })
        }}
        >{label}

        </Button>
    )
}