import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Progress } from "@/components/ui/progress";
import { decimalToMoney } from "@/lib/helpers";
import { getBudgetAmount, getMonthlyTotalSpend } from "@/lib/queries/budget";


export default async function BudgetBar(){

    const totalMonthlySpend = await getMonthlyTotalSpend();
    const budgetAmount = await getBudgetAmount();

  

    if (!totalMonthlySpend || !budgetAmount) return (
        <div>
        <p className="ml-2">Budget amount unset</p>
        <Button className="mt-3">Set Budget</Button>
        </div>

    );

      const available = budgetAmount?.minus(totalMonthlySpend)

    

    
    return (
                  <div className="w-full max-w-sm ml-2">
 <Field>
      <FieldLabel htmlFor="progress-upload">
        <span>Remaining</span>
        <span className="ml-auto">12%</span>
      </FieldLabel>
      <Progress value={12} id="progress-upload" />
    </Field>
    <div className="mt-2 text-sm flex gap-5">
      <p>Available: {decimalToMoney(available)}</p>
      <p>Total: {decimalToMoney(budgetAmount)}</p>
      <p>Spend: {decimalToMoney(totalMonthlySpend)}</p>
    </div>
          </div>
    )
}