import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

export const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes.",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers.",
    amount: 89.99,
    date: new Date("2021-01-05"),
  },
  {
    id: "e3",
    description: "Some bananas.",
    amount: 5.99,
    date: new Date("2022-12-01"),
  },
  {
    id: "e4",
    description: "A book.",
    amount: 14.99,
    date: new Date("2022-02-23"),
  },
  {
    id: "e5",
    description: "Another book.",
    amount: 17.99,
    date: new Date("2022-03-04"),
  },
  {
    id: "e6",
    description: "A pair of shoes.",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e7",
    description: "A pair of trousers.",
    amount: 89.99,
    date: new Date("2021-01-05"),
  },
  {
    id: "e8",
    description: "Some bananas.",
    amount: 5.99,
    date: new Date("2022-12-01"),
  },
  {
    id: "e9",
    description: "A book.",
    amount: 14.99,
    date: new Date("2022-02-23"),
  },
  {
    id: "e10",
    description: "Another book.",
    amount: 17.99,
    date: new Date("2022-03-04"),
  },
];

export default function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
  },
});
