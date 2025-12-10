import Button from "@/components/ui/Button";
import InventoryTable from "./_components/InventoryTable";
import Link from "next/link";



const headings = ['Name', 'Part #', 'Brand', 'Category', 'QTY', 'Action'];
const values = [
    { asset: '3pc screw driver set',  part: 'GJK224', brand: 'Milwaukee', category: 'Screw drivers', qty: 12, link: '/' },
    { asset: '3pc screw driver set',  part: 'GJK224', brand: 'Milwaukee', category: 'Screw drivers', qty: 12, link: '/' },
    { asset: '3pc screw driver set',  part: 'GJK224', brand: 'Milwaukee', category: 'Screw drivers', qty: 12, link: '/' },
    { asset: '3pc screw driver set',  part: 'GJK224', brand: 'Milwaukee', category: 'Screw drivers', qty: 12, link: '/' },
]

export default function page(){
    return (
        <div>
         <h2>Inventory page</h2>
         <div className="flex gap-3 mt-3">
            <Link href={'/inventory/create'}><Button text="Create Part"/></Link>
        
         </div>
         <InventoryTable headings={headings} values={values}/>
        </div>
    )
}