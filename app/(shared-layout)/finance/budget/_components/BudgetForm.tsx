"use client";

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input";
import { upsertBudget } from "@/lib/actions/budget";
import { budgetSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const today = new Date();
const currentMonth = today.toLocaleString('default', {month: 'long'});
const currentYear = today.toLocaleString('default', {year: 'numeric'});



export default function BudgetForm(){

         const [isPending, startTransition] = useTransition();
  

    const form = useForm({
        resolver: zodResolver(budgetSchema),
        defaultValues:{
            budget: ""
        }
    });

    function onSubmit(values: z.infer<typeof budgetSchema>){
        startTransition(async()=>{

            const res = await upsertBudget(values);

            if (res.success){
                toast.success(res.message);
                form.reset()
        
            }
            
        })
    }
    return (
        <FieldSet className="w-full max-w-xs">
            <form onSubmit={form.handleSubmit(onSubmit)}>
  <FieldGroup>
    <Controller name="budget" control={form.control}
    render={({field, fieldState})=>(
 <Field>
          <FieldLabel htmlFor="username">{currentMonth}  {currentYear}</FieldLabel>
          <Input id="username" type="number" placeholder="Budget $NZD" aria-invalid={fieldState.invalid} {...field} />
              {fieldState.invalid &&
                                        <FieldError errors={[fieldState.error]} />
                                    }
          <FieldDescription>
            Enter your budget amount for {currentMonth}
          </FieldDescription>
        </Field>
    )}
     
    />
  
        <Field orientation={"responsive"}>
           
            <div className="w-full">
      <Button disabled={isPending} className="cursor-pointer">
         {isPending ? (
                <>
                    <Loader2 className="size-4 animate-spin"/>
                     <span>Updating</span>
                </>
            ):
            (
                <span>Update</span>
            )}
      </Button>
            </div>
      

        </Field>
       
      </FieldGroup>
            </form>
    
    </FieldSet> 
    )
}

