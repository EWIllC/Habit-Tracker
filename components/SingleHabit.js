import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import React, { useContext, useState } from "react";
import { HabitsContext } from "../Context"
//track over an amount of days

export default function SingleHabit({ route }) {

  const {habits, setHabits} = useContext(HabitsContext);
  const {id, name, amount, limit} = route.params;

  const [amountText, setAmountText] = useState(amount);
  const [limitText, setLimitText] = useState(limit);
  const [dropDown, setDropDown] = useState(false);

  const handleDelete = () => {
    setHabits(habits.filter(habit => habit.id !== id));
  }

  const handleEdit = (val, type) => {
    if(type === "amount" && amountText + val >= 0) {
      setAmountText(amountText + val);
    }
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
    <View>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.text}> you have had <Text style={{color: amountText <= limitText ?  "#3deb34" : "#f50707"}}>{amountText}</Text> {name}(s) today</Text>
      <Text style={styles.text}> your goal is less than {limitText}</Text>
      <Button
        type="edit-amount"
        title="+"
        onPress={() => handleEdit(1, "amount")}
      />
      <Button
        type="edit-amount"
        title="-"
        onPress={() => handleEdit(-1, "amount")}
      />
      <Button
        title="Settings"
        onPress={() => setDropDown(!dropDown)}
      />
      {dropDown ?
      <View>
        <Text>Set your daily goal</Text>
        <TextInput
          style={styles.input}
          value={limitText}
          onChangeText={setLimitText}
        />
        <Button
          title="Submit"
          onPress={() => handleEdit(limitText, "limit")}
        />
        <Button
          title="Delete this habit"
          onPress={() => handleDelete()}
        />
      </View>
        : <Text></Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
  },
  text: {
    fontSize: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})

