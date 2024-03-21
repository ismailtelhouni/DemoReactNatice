import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList } from "react-native";

const HomeScreen = ({navigation , route }) => {

    const { newTask } = route.params ?? {};

  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1" },
    { id: 2, title: "Task 2" },
    { id: 3, title: "Task 3" }, 
  ]);

useEffect(() => {
    if (newTask) {
      setTasks(prevTasks => prevTasks.concat(newTask));
    }
  }, [newTask]);

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <FlatList
        data={tasks}
        keyExtractor={ ( item ) => item.id.toString() }
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <Text>{item.title}</Text>
            <Button title="Delete" onPress={() => removeTask(item.id)} />
          </View>
        )}
      />
      <Button title="Add Task" onPress={() => navigation.navigate("AddTask")} />
    </View>
  );
};

export default HomeScreen;
