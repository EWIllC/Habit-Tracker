import React from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState, useContext } from "react";
import { HabitsContext } from "../App";

export default function Home({ navigation }) {
  const { habits, setHabits } = useContext(HabitsContext);
  const handleClick = () => {
    console.log(habits);
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button
        title="log"
        onPress={() => handleClick()} />
      <Button
        title="Create Habit"
        onPress={() => navigation.navigate("Create-Habit")} />
      {habits.map((elem, i) =>
      <Button
        title={elem.name}
        onPress={() => navigation.navigate("SingleHabit", {id: elem.id, name: elem.name, amount: elem.amount})}
      />)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "top",
    justifyContent: 'top',
  },
});
