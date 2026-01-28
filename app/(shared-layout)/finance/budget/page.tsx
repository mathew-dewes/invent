import BudgetForm from "./_components/BudgetForm";
import BudgetAmount from "./_components/BudgetAmount";

export default function page(){

    return(
        <div>
          <BudgetAmount/>
          
 
            <div className="mt-10">
            <BudgetForm />
            </div>

        </div>
    )
}