import { getStockNames } from "@/lib/queries/stock";
import RequestForm from "./_components/RequestForm";

export default async function Page(){

    const stock = await getStockNames();
    return (
        <div>
            <RequestForm stock={stock}/>
        </div>
    )
}