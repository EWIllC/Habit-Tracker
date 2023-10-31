import React from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';
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
      {habits.map((elem, i) =>
      <Button
        title={elem.name}
        key={elem.id}
        onPress={() => navigation.navigate("SingleHabit", {id: elem.id, name: elem.name, amount: elem.amount, limit: elem.limit})}
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
