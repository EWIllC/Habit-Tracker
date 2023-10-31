import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useState, useEffect, createContext } from "react";
import { HabitsContext } from "./Context";
import Home from "./components/Home";
import CreateHabit from "./components/CreateHabit";
import SingleHabit from "./components/SingleHabit";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [habits, setHabits] = useState([]);
  const value = {
    habits, setHabits,
  };

  return (
    <HabitsContext.Provider value={value}>
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ title: "Overveiw"}}/>
          <Stack.Screen name="Create-Habit" component={CreateHabit} />
          <Stack.Screen name="SingleHabit" component={SingleHabit} />
      </Stack.Navigator>
    </NavigationContainer>
    </HabitsContext.Provider>
  );
}


