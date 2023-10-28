import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useState, createContext } from "react";
import Home from "./components/Home";
import CreateHabit from "./components/CreateHabit";
import SingleHabit from "./components/SingleHabit";
import Settings from "./components/Settings";

export const HabitsContext = createContext([]);

export default function App() {

  const Stack = createNativeStackNavigator();
  const [habits, setHabits] = useState([]);
  const value = {
    habits, setHabits
  };

  return (
    <HabitsContext.Provider value={value}>
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ title: "Overveiw"}}/>
          <Stack.Screen name="Create-Habit" component={CreateHabit} />
          <Stack.Screen name="SingleHabit" component={SingleHabit} />
          <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
    </HabitsContext.Provider>
  );
}


