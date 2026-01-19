import { getVendorById } from "@/lib/queries/vendor";
import EditVendorForm from "./_components/EditVendorForm";

export default async function page({params}:
    {params: Promise<{id: string}>}
){

          const {id} = await params;
          const vendor = await getVendorById(id);

          if (!id ||!vendor) return
          
    return (<div>
        <EditVendorForm values={vendor} vendorId={id}/>
    </div>)
}