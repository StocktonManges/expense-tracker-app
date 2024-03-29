import { FlatList, Text } from "react-native";
import ExpenseItem from "./ExpenseItem";

export default function ExpensesList({ expenses }) {
  const renderExpenseItem = ({ item }) => <ExpenseItem {...item} />;

  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}
