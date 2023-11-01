import { View, SafeAreaView, Text, StyleSheet, Button } from 'react-native';
import React, { useContext, useState } from "react";
import { HabitsContext } from "../Context"
import SetLimit from "./SetLimit";
import { handleEdit, handleDelete } from "./functions/functions";
//track over an amount of days

export default function SingleHabit({ navigation, route }) {

  const {habits, setHabits} = useContext(HabitsContext);
  const habit = habits.find((elem) => elem.id === route.params.id);
  const { id, name, amount, limit } = habit;
  const [limitText, setLimitText] = useState(limit);
  const [dropDown, setDropDown] = useState(false);

  return (
    <View>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.text}> you have had <Text style={{color: amount <= limitText ?  "#3deb34" : "#f50707"}}>{amount}</Text> {name}(s) today</Text>
      <Text style={styles.text}> your goal is less than {limit}</Text>
      <Button
        type="edit-amount"
        title="+"
        onPress={() => handleEdit(1, "amount", habits, setHabits, id)}
      />
      <Button
        type="edit-amount"
        title="-"
        onPress={() => handleEdit(-1, "amount", habits, setHabits, id)}
      />
      <Button
        title="Settings"
        onPress={() => setDropDown(!dropDown)}
      />
      {dropDown ?
      <SafeAreaView>
        <SetLimit options={{ limitText, setLimitText, habits, setHabits, id }} />
        <Button
          title="Delete this habit"
          onPress={() => handleDelete(habits, setHabits, id, navigation)}
        />
      </SafeAreaView>
      : <Text></Text>
      }
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

