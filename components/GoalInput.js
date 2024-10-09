import {Button, TextInput, View, StyleSheet} from "react-native";
import {useState} from "react";

export function GoalInput({onAddGoal}) {
  const [goalText, setGoalText] = useState();

  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.textInputStyle}
                 placeholder={"Your course goal ..."}
                 onChangeText={(value) => setGoalText(value)}
                 value={goalText}
      />
      <Button title={"Add goal"}
              onPress={() => {
                onAddGoal(goalText)
                setGoalText("");
              }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#a4a4a4',
    flex: 1,
  },
  textInputStyle: {
    borderWidth: 1,
    borderColor: '#b9b6b6',
    width: '80%',
    marginRight: 8,
    paddingHorizontal: 8,
    paddingVertical: 4
  },
})