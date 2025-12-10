import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import prisma from "@/lib/prisma";

export default async function page() {


  const posts = await prisma.post.findMany();

  console.log(posts);
  
  return (
    <div>
      <h1>Dashboard goes here</h1>

      <div className="mt-10">
        <p>Para: Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illum.</p>
        <div className="flex mt-10 gap-10">
          <div className="w-50 aspect-square bg-light-blue-500" />
          <div className="w-50 aspect-square bg-dark-blue-500" />
          <div className="w-50 aspect-square bg-[#000000]" />

        </div>
        <div className="mt-10">
          <h1>Elements</h1>
          <div className="mt-5 w-150">
        <Button text="Button"/>
        <div className="flex gap-5 mt-5">
          <div className="w-full">
             <Label text="Email"/>
    <Input/>
          </div>
          <div className="w-full">
               <Label text="Password"/>
               <Input placeholder="Enter Password"/>
               {/* <ErrorMessage/> */}
          </div>
    
        </div>

          </div>

        </div>
      </div>





    </div>
  )
}