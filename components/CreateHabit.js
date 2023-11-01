import { Text, SafeAreaView, TextInput, StyleSheet, Button } from 'react-native';
import { useState, useContext } from "react";
import { HabitsContext } from "../Context";

export default function CreateHabit({ navigation }) {

  const { habits, setHabits } = useContext(HabitsContext);
  const [text, onChangeText] = useState("");

  const handlePress = () => {
    const habit = {
      id: habits.length + 1,
      name: text,
      amount: 0,
      limit: 0,
    }
    setHabits([...habits, habit]);
    navigation.navigate("Home");
  }
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button
        title="Submit"
        onPress={() => handlePress()}
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
});
