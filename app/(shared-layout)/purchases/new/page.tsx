import { getStockNames } from "@/lib/queries/stock";
import PurchaseForm from "./_components/purchaseForm";

export default async function Page(){

    const stock = await getStockNames();

    return (
        <div>
            <PurchaseForm stock={stock}/>
        </div>
    )
}