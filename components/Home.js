import React from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text, Button, Pressable } from 'react-native';
import { useContext } from "react";
import { HabitsContext } from "../Context";

export default function Home({ navigation }) {
  const { habits } = useContext(HabitsContext);
  const handleClick = () => {
    const date = new Date();
    console.log(date.getDate());
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button
        title="log"
        onPress={() => handleClick()}
      />
      <Button
        title="Create Habit"
        onPress={() => navigation.navigate("Create-Habit")}
      />
      <View style={styles.buttonContainer}>
        {habits.map((elem, i) =>
        <Pressable
          key={elem.id}
          onPress={() => navigation.navigate("SingleHabit", {id: elem.id, name: elem.name})}
          style={styles.button}
        >
          <Text style={styles.buttonInnerText}>{elem.name}</Text>
        </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  buttonContainer: {
    flexDirection: "column",
    rowGap: 5,
    paddingTop: 150
  },
  button: {
    flexDirection:"column",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 4,
    borderStyle: "solid",
    borderWidth: 1.5,
    borderColor: "white",
    backgroundColor: "#5391f5",
  },
  buttonInnerText: {
    fontSize: 30,
    color: "white",
  }
});
