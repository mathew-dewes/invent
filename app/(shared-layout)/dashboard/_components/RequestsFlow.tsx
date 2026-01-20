
import { MonthlySpendChart } from "./charts/MonthlySpendChart";
import { RequestFlowChart } from "./charts/RequestFlowChart";

export default function RequestsFlow(){
    return (
        <div className="border-2 p-3 rounded-xl bg-secondary">
            <div className="grid grid-cols-2 gap-5 justify-between">
       
  <RequestFlowChart/>
            
   
     <MonthlySpendChart/>

            </div>
      
    
        
   
        </div>
    )
}

