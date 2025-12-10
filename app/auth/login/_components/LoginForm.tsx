import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import Link from "next/link";

export default function LoginForm() {
    return (
        <form className="mt-5">
            <div className="flex w-120 gap-5">
                <div className="w-full">
                    <Label text="Email:" />
                    <Input type="email" placeholder="Email" />
                </div>
                <div className="w-full">
                    <Label text="Password:" />
                    <Input type="password" placeholder="Password" />
                </div>
            </div>
            <div className="mt-5">
                <p>Don&apos;t have an account? Click of Register</p>
                <div className="flex gap-8 mt-3">
                  
                    <Button text="Login" />
                      <Link href={'/auth/register'}><Button text="Register" /></Link>
  
                </div>
                <p className="mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, delectus.</p>
            </div>







        </form>
    )
}