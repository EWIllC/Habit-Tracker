import { Text, SafeAreaView, TextInput, StyleSheet, Button } from 'react-native';
import { useState, useContext } from "react";

export default function CompMode({ options }) {
  const { name, amount, limit } = options;

  const colorSwitch = () => {
    if(amount >= limit ) {
      return  "#3deb34";
    } else {
      return "#f50707";
    }
  }

  return (
    <SafeAreaView>
      <Text style={{fontSize: 35}}>Welcome to Competitive Mode</Text>
      <Text style={styles.text} >You have only had <Text style={{color: colorSwitch()}}>{amount}</Text> {name} today, speed up</Text>
      <Text style={styles.text}>to beat your personal record of {limit}</Text>
    </SafeAreaView>
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
