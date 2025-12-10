import InventoryTable from "./_components/InventoryTable";



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
         <InventoryTable headings={headings} values={values}/>
        </div>
    )
}