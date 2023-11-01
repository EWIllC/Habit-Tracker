import { View, SafeAreaView, Text, StyleSheet, Button, Pressable } from 'react-native';
import React, { useContext, useState } from "react";
import { HabitsContext } from "../Context"
import SetLimit from "./SetLimit";
import CompMode from './CompMode';
import { handleEdit, handleDelete } from "./functions/functions";
//track over an amount of days

export default function SingleHabit({ navigation, route }) {
  const {habits, setHabits} = useContext(HabitsContext);
  const habit = habits.find((elem) => elem.id === route.params.id);
  const { id, name, amount, limit } = habit;
  const [limitText, setLimitText] = useState(limit);
  const [dropDown, setDropDown] = useState(false);
  const [toggleLimit, setToggleLimit] = useState(limit > 0);

  const colorSwitch = () => {
    if(amount <= limit || !toggleLimit) {
      return  "#3deb34";
    } else {
      return "#f50707";
    }
  }

  return (
    <View>
      <Text style={styles.title}>{name}</Text>
      {toggleLimit ?
        <Text style={styles.textLimit}> your goal is less than {limit}</Text>
        :
        <Text></Text>
      }
      <Text style={styles.textAmount}> {name}(s) today:
        <Text style={{color: colorSwitch(), fontSize: 120}}>{amount < 10 ? "0" + amount : amount}
        </Text>
      </Text>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.minButton}
          onPress={() => handleEdit(-1, "amount", habits, setHabits, id)}
        >
          <Text style={styles.minButtonInner}>-</Text>
        </Pressable>
        <Pressable
          style={styles.plusButton}
          onPress={() => handleEdit(1, "amount", habits, setHabits, id)}
        >
          <Text style={styles.plusButtonInner}>+</Text>
        </Pressable>
      </View>
      <Button
        title="Settings"
        onPress={() => setDropDown(!dropDown)}
      />
      {dropDown ?
      <SafeAreaView>
        <SetLimit options={{ limitText, setLimitText, habits, setHabits, id }} />
        <Button
          title={"toggle daily goal"}
          onPress={() => setToggleLimit(!toggleLimit)}
        />
        <Button
          title="Delete this habit"
          onPress={() => handleDelete(habits, setHabits, id, navigation)}
        />
      </SafeAreaView>
      :
      <Text></Text>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 65,
    paddingTop: 22,
    paddingLeft: 12
  },
  textLimit: {
    fontSize: 20,
    paddingLeft: 12
  },
  textAmount: {
    fontSize: 20,
    paddingTop: 0,
    paddingLeft: 12,

  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    paddingTop: 12,
    flexDirection: "row",
  },
  plusButton: {
    flex:1,
    height: 55,
    alignItems:"flex-end",
    paddingLeft: 170,
    marginLeft: 10,
    marginRight: 15,
    backgroundColor: "blue",
    borderRadius: 40
  },
  plusButtonInner: {
    color: "white",
    paddingRight: 138,
    fontSize: 40,
  },
  minButton:{
    flex:1,
    alignItems:"flex-start",
    marginLeft: 15,
    marginRight: 0,
    backgroundColor: "blue",
    borderRadius: 40
  },
  minButtonInner: {
    color: "white",
    paddingLeft: 33,
    fontSize: 40
  }
})

