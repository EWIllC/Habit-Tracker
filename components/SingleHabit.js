import { Text, View, StyleSheet, Button } from 'react-native';
import React, { useContext, useState } from "react";
import { HabitsContext } from '../App';

export default function SingleHabit({ route, navigation }) {

  const { habits, setHabits } = useContext(HabitsContext);
  const {id, name, amount, limit} = route.params;
  const [valAmount, setValAmount] = useState(amount);

  const handleDelete = () => {
    setHabits(habits.filter(habit => habit.id !== id))
  }

  const handleEditAmount = (num) => {
    setValAmount(valAmount + num)
    const updated = habits.map((habit, i) => {
      if(habit.id === id) {
        let update = {
          id: habit.id,
          name: habit.name,
          amount: habit.amount + num,
          limit: habit.limit
        }
        return update
      } else {
        return habit
      }
    })
    setHabits(updated)
  }

  return (
    <View>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.text}> you have had {valAmount} {name}(s) today</Text>
      <Text style={styles.text}> your goal is less than {limit}</Text>
      <Button
        type="edit-amount"
        title="+"
        onPress={() => handleEditAmount(1)}
      />
      <Button
        type="edit-amount"
        title="-"
        onPress={() => handleEditAmount(-1)}
      />
      <Button
       title="Delete this habit"
       onPress={() => handleDelete()}
      />
      {/* <Button
        title="Settings"
        onPress={() => navigation.navigate("Settings", {id, name, amount, limit})}
      /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
  },
  text: {
    fontSize: 30,
  },
})
