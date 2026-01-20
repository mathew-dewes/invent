import { Suspense } from "react";
import StockHealth from "./_components/StockHealth";
import Operations from "./_components/Operations";
import RequestsFlow from "./_components/RequestsFlow";

export default function page() {

    return (
        <div>

            <Suspense fallback={'Loading Stock health data...'}>
                <div className="flex flex-col gap-6">
               
                         <StockHealth />
                        <RequestsFlow/>
                         <Operations />
               
         
           
                </div>

            </Suspense>





        </div>
    )
}