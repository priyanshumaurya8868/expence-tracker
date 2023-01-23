import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
const Expenses = (props) => {
  const expenseItems = props.expenses.map((exp) => (
    <ExpenseItem title={exp.title} date={exp.date} amount={exp.amount} />
  ));
  return <Card className="expenses">{expenseItems}</Card>;
};

export default Expenses;
