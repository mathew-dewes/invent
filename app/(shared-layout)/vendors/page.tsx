import { Button } from "@/components/ui/button";

import Link from "next/link";
import VendorTable from "./_components/VendorTable";
import { Suspense } from "react";
import TableSkeleton from "@/components/web/skeletons/TableSkeleton";

export default  function VendorPage(){


    return(
        <div>
  <div className="flex justify-end">
      <Link href={'/vendors/new'}><Button>Create Vendor</Button></Link>
        
      </div>
      <Suspense fallback={<TableSkeleton/>}>
  <VendorTable/>
      </Suspense>
          
        </div>
    )
}