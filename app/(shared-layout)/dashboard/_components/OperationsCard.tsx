import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
    title: string
}

export default function OperationsCard({title}:Props){
    return (
         <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>
       
             <p className="flex gap-1"><span className="font-semibold text-white/80">hrtrht</span>fe</p>
        
 
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div>
      <p>Total: 11</p>
    

        </div>

      </CardContent>
      <CardFooter className="flex-col gap-2">
      
            <Link className={cn(buttonVariants({variant: "default"}), 'w-full') } href={'/'}>View stock</Link>
   
      

      </CardFooter>
    </Card>
    )
}