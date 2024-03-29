import ExpensesOutput, {
  DUMMY_EXPENSES,
} from "../components/ExpensesOutput/ExpensesOutput";

export default function AllExpensesScreen() {
  return <ExpensesOutput expenses={DUMMY_EXPENSES} expensesPeriod="Total" />;
}
