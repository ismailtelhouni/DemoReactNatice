import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

const AddTaskScreen = ({ navigation }) => {
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() === "") return;
    navigation.navigate("Home", {
      newTask: { id: Math.random(), title: task },
    });
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "gray",
          padding: 10,
          marginBottom: 10,
          width: 200,
        }}
        placeholder="Enter task"
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <Button title="Add Task" onPress={addTask} />
    </View>
  );
};

export default AddTaskScreen;
