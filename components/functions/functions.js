export const handleEdit = (val, type, habits, setHabits, id) => {
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

export const handleDelete = (habits, setHabits, id, navigation) => {
  setHabits(habits.filter(habit => habit.id !== id));
  navigation.navigate("Home");
}
