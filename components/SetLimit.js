import { Text, TextInput, Button, StyleSheet, SafeAreaView } from "react-native";
import { handleEdit } from "./functions/functions";

export default function SetLimit({ options }) {
  const { limitText, setLimitText, habits, setHabits, id } = options;

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        value={limitText}
        onChangeText={setLimitText}
      />
      <Button
        title="Submit"
        onPress={() => handleEdit(limitText, "limit", habits, setHabits, id)}
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
