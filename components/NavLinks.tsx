"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks(){
          const path = usePathname();
    return (
         <ul className="md:flex gap-5 items-center text-white/80 hidden">
                    <Link className={`${path.startsWith("/auth/login") ? "text-white font-semibold" : "hover:text-white"}`}  href={'/auth/login'}>Auth</Link>
                    <Link className={`${path.startsWith("/inventory") ? "text-white font-semibold" : "hover:text-white"}`} href={'/inventory'}>Inventory</Link>
                    <Link className={`${path.startsWith("/orders") ? "text-white font-semibold" : "hover:text-white"}`} href={'/orders'}>Orders</Link>
                    <Link className={`${path.startsWith("/shipments") ? "text-white font-semibold" : "hover:text-white"}`}  href={'/shipments'}>Shipments</Link>
                    

                </ul>
    )
}