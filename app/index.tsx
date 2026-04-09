import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  function updateTodo() {
    {
      /* TODO: write update todo logic */
    }
  }

  function deleteTodo() {
    {
      /* TODO: write delete todo logic */
    }
  }

  function getRandomId() {
    let id = Math.floor(Math.random() * 10000000);
    return id;
  }

  function taskAdd() {
    if (input.trim() === "") return;

    setTask([
      ...task,
      {
        task: input,
        id: `${getRandomId()}-${input}`,
      },
    ]);

    setInput("");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Your To Do</Text>
      </View>
      <View style={styles.addTask}>
        <TextInput
          style={styles.addTodo}
          placeholder="Add new task"
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity style={styles.button} onPress={taskAdd}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      {/* TODO: use flatlist */}
      <ScrollView style={styles.scroll}>
        <View style={styles.tasks}>
          {task.map((todo) => (
            <Text key={todo.id} style={styles.id}>
              {todo.task}
            </Text>
          ))}
          {/* TODO: add a view to show delete button */}
          {/* TODO: add a view to show update button */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#e1d6d6",
  },
  header: {
    height: "20%",
    justifyContent: "flex-end",
    padding: "5%",
  },
  headerText: {
    fontSize: 45,
    fontWeight: "bold",
    color: "#252525",
  },

  addTask: {
    margin: 20,
    height: "10%",
    flexDirection: "row",
  },
  addTodo: {
    width: "80%",
    padding: 20,
    fontSize: 25,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "black",
  },

  button: {
    height: "100%",
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "500",
    color: "#252525",
  },
  scroll: {
    height: "100%",
  },
  tasks: {
    padding: "2%",
  },
  id: {
    fontSize: 30,
    padding: 10,
    margin: 5,
    fontWeight: 500,
    borderWidth: 2,
    borderRadius: 10,
  },
});
