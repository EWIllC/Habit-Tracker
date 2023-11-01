import { Text, SafeAreaView, TextInput, StyleSheet, Button } from 'react-native';
import { useState, useContext } from "react";
import { HabitsContext } from "../Context";

export default function CreateHabit({ navigation }) {
  const { habits, setHabits } = useContext(HabitsContext);
  const [text, onChangeText] = useState("");
  const [limitText, setLimitText] = useState(0);
  const [nameConfirm, setNameConfirm] = useState(false);

  const handlePress = () => {
    if(nameConfirm) {
      const habit = {
        id: habits.length + 1,
        name: text,
        amount: 0,
        limit: limitText,
      };
      setHabits([...habits, habit]);
      setNameConfirm(!nameConfirm);
      navigation.navigate("Home");
    } else {
      setNameConfirm(!nameConfirm);
    }
  }
  return (
    <SafeAreaView>
      <Text>Enter the name of your Habit</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      {!nameConfirm ?
      <SafeAreaView>
        <Button
          title="Submit"
          onPress={() => handlePress()}
        />
      </SafeAreaView>
      :
      <SafeAreaView>
         <Text>Would you like to enter a daily goal? Otherwise just press submit</Text>
        <TextInput
          style={styles.input}
          onChangeText={setLimitText}
          value={limitText}
        />
        <Button
          title="Submit"
          onPress={() => handlePress()}
        />
      </SafeAreaView>
      }
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
