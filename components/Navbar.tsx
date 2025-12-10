import Link from "next/link";
import Avatar from "./Avatar";
import NavLinks from "./NavLinks";

export default function Navbar() {
    
    return (
        <nav className="flex justify-between px-10 py-5 bg-light-blue-500">
            <Link href={'/'}><h1 className="text-white/90 hover:text-white">Invent</h1></Link>
      
            <div className="flex gap-15 items-center">
                <NavLinks/>
                <div className="flex items-center gap-10 text-white/90">
                    <Avatar name="Mathew Dewes" />
                    <p>Logout</p>
                </div>

            </div>


        </nav>
    )
}