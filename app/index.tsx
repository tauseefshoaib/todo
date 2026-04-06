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

  function saveInput(textinput) {
    setInput(textinput);
  }
  function taskAdd() {
    if (input.trim("") === "") return;
    setTask([...task, input]);
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
          onChangeText={saveInput}
        />
        <TouchableOpacity style={styles.button} onPress={taskAdd}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scroll}>
        <View style={styles.tasks}>
          {task.map((todo, index) => (
            <Text key={index} style={styles.id}>
              {todo}
            </Text>
          ))}
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
