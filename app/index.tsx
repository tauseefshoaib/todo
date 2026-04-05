import React from "react";
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
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Your To Do</Text>
      </View>
      <View style={styles.addTask}>
        <TextInput style={styles.addTodo}>
          <Text style={styles.addTodoText}>Add new task</Text>
        </TextInput>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Add</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.tasks}>
          <Text style={styles.id}>Task1</Text>
          <Text style={styles.id}>Task2</Text>
          <Text style={styles.id}>Task3</Text>
          <Text style={styles.id}>Task4</Text>
          <Text style={styles.id}>Task5</Text>
          <Text style={styles.id}>Task6</Text>
          <Text style={styles.id}>Task7</Text>
          <Text style={styles.id}>Task8</Text>
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
    // backgroundColor: "#666",
    flexDirection: "row",
  },
  addTodo: {
    // backgroundColor: "pink",
    width: "80%",
    padding: 20,
    fontSize: 25,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 3,
    borderBottomColor: "black",
  },
  addTodoText: {
    color: "#252525",
    fontSize: 35,
    fontWeight: "500",
  },
  btn: {
    height: "100%",
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontSize: 30,
    fontWeight: "500",
    color: "#252525",
  },
  tasks: {
    // backgroundColor: "pink",
    height: "80%",
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
