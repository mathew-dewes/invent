import { PurchaseStatus, RequestStatus } from "@/generated/prisma/enums";
import { StockOverviewType } from "@/lib/types";
import {  generateStatusColor } from "@/lib/utils";



export async function StatusCircle({status}:{status: RequestStatus | StockOverviewType | PurchaseStatus}){

    const color = generateStatusColor(status);
    


    return        <div className={`size-4 ${color} rounded-full`}/>
}