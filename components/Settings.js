
import { Text, SafeAreaView, TextInput, StyleSheet, Button } from 'react-native';
import { useState, useContext } from "react";
import { HabitsContext } from '../App';

export default function Settings() {

  const { habits, setHabits } = useContext(HabitsContext);
  const [text, onChangeText] = useState(habits.limit);

  const handleEditLimit = () => {
    habits.map((habit, i ) => {
      if(habit.id === id) {
          habit.id = habit.id,
          habit.name = habit.name,
          habit.amount = habit.amount,
          habit.limit = parseInt(text)
      }
    })
  }

  return (
    <Veiw>
      <Text>Settings tab</Text>
      <Text>Set your limit</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      <Button
        title="Submit"
        onPress={() => {handleEditLimit()}}
      />
    </Veiw>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 80,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})
