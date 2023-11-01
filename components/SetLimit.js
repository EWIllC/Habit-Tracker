import { Text, TextInput, Button, StyleSheet, SafeAreaView } from "react-native";

export default function SetLimit({ options }) {

  const { limitText, setLimitText, habits, setHabits, id } = options;

  const handleEdit = (val, type) => {
    const updated = habits.map((habit, i) => {
      if(habit.id === id) {
        let update = {
          id: habit.id,
          name: habit.name,
          amount: type === "amount" && habit.amount + val >= 0 ? habit.amount + val : habit.amount,
          limit: type === "limit" ? val : habit.limit,
        }
        return update;
      } else {
        return habit;
      }
    })
    setHabits(updated);
  }
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        value={limitText}
        onChangeText={setLimitText}
      />
      <Button
        title="Submit"
        onPress={() => handleEdit(limitText, "limit")}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})
