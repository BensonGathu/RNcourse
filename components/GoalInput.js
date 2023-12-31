import React, { useState } from "react";
import {
  TextInput,
  View,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };
  const addGoalHandler = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <Modal visible={props.modalStatus} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/images/goal.png")} />
        <TextInput
          style={styles.textInput}
          placeholder="Add Your Goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
        <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCloseModal} color="#f31282"/>
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoalHandler} color="#5e0acc"/>
          </View>
        
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor:"#e4d0ff",
    color:"#120438",
    width: "100%",
    borderRadius:6,
    
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    paddingTop: 16,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
