import TableThumbNail from "@/components/images/TableThumbNail"
import Button from "@/components/ui/Button"
import Link from "next/link"

export default function InventoryTable({headings, values}:
    {headings: string[], values: {asset: string, part: string, brand: string, category: string, qty: number, link: string}[]}
) {
    return (

        <table className="w-full mt-5 hidden md:table">
            <thead className="bg-gray-50">
                <tr>
                    {headings.map((item, key) => {
                        return <th key={key} className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">{item}</th>
                    })}

                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {values.map((value, key) => {
                    return (
                        <tr key={key} className="hover:bg-gray-50">
                            <td className="px-6 py-4 text-sm text-dark-500 hidden md:table-cell">
                                <div className="flex items-center gap-2">
                                    <TableThumbNail/>
                                    <span className="mt-1">{value.asset}</span>
                                </div>
                               </td>
                            <td className="px-6 py-4 text-sm text-dark-500 hidden md:table-cell">{value.part}</td>
                            <td className="px-6 py-4 text-sm text-dark-500 hidden md:table-cell">{value.brand}</td>
                            <td className="px-6 py-4 text-sm text-dark-500 hidden md:table-cell">{value.category}</td>
                            <td className="px-6 py-4 text-sm text-dark-500 hidden md:table-cell">{value.qty}</td>
                            <td className="px-6 py-4 text-sm text-dark-500 hidden md:table-cell">
                                <Link href={value.link}><Button text="Update"/></Link>
           
                                </td>

                        </tr>
                    )
                })}


            </tbody>




        </table>
    )
}