import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, View, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

const App = () => {
  const [goals, setGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalsHandler = (goal) => {
    console.log(goal);
    setGoals((currentGoal) => [
      ...goals,
      { id: Math.random().toString(), value: goal },
    ]);
    setIsAddMode(false);
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    console.log(goalId);
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <Button
        title="Add New Goals"
        color="#32a897"
        onPress={() => setIsAddMode(true)}
      />
      <GoalInput
        visible={isAddMode}
        onCancel={cancelGoalAdditionHandler}
        onAddGoal={addGoalsHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { padding: 50 },
  listItems: {
    width: "70%",
    padding: 10,
    backgroundColor: "#6fa832",
    marginVertical: 10,
    borderRadius: 10,
  },
});

export default App;
