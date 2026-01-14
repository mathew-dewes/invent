import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/web/tables/DataTable";
import { VendorColumns } from "@/components/web/tables/VendorColumns";
import { getVendors } from "@/lib/queries/vendor";

import Link from "next/link";

export default async function VendorPage(){

const vendors = await getVendors();


    return(
        <div>
  <div className="flex justify-between">
      <h1 className="font-bold text-2xl" >Vendors</h1>
      <Link href={'/vendors/new'}><Button>Create Vendor</Button></Link>
        
      </div>
            <DataTable filter="name" data={vendors} columns={VendorColumns}/>
        </div>
    )
}