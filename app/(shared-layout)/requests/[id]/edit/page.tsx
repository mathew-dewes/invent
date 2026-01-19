import { getStockNames } from "@/lib/queries/stock";
import EditRequestForm from "./_components/EditRequestForm";
import { getRequestById } from "@/lib/queries/request";

export default async function editRequestPage({params}:
    {params: Promise<{id: string}>}
){

          const {id} = await params;

        const stockNames = await getStockNames();
        const stockValues = await getRequestById(id);

        if (!stockValues) return;
        
    return (
        <div>
            <EditRequestForm stock={stockNames} values={stockValues} requestId={id}/>
        </div>
    )
}