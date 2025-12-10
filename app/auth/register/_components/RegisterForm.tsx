import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import Link from "next/link";

export default function RegisterForm() {
    return (
        <form className="mt-5 max-w-60 sm:max-w-120">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="w-full">
                    <Label text="First name:" />
                    <Input placeholder="First name" />
                </div>
                <div className="w-full">
                    <Label text="Last name:" />
                    <Input placeholder="Last name" />
                </div>
                <div className="w-full">
                    <Label text="Email:" />
                    <Input placeholder="Last name" />
                </div>
                <div className="w-full">
                    <Label text="Organisation:" />
                    <Input placeholder="Organisation" />
                </div>
                <div className="w-full">
                    <div>
                        <Label text="Password:" />
                        <Input placeholder="Password" />
                    </div>

                </div>
                <div className="w-full">
                    <div>
                        <Label text="Repeat Password:" />
                        <Input placeholder="Repeat password" />
                    </div>

                </div>
                <div className="w-full mt-5">
                    <div>
       <Label text="Profile image:" />
       <p className="mb-2"><span>Optional*</span></p>

       <Input type="file" placeholder="Last name" />
                    </div>

                </div>

            </div>


            <div className="mt-5">
                <p>Already have an account? Click Login to navigate back to the login page</p>
                <div className="flex gap-3 sm:gap-5 mt-3">
                    <Button text="Register" />
                    <Link href={'/auth/login'}><Button text="Login" /></Link>

                </div>
                <p className="mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, delectus.</p>
            </div>







        </form>
    )
}