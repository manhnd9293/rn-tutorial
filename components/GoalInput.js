import {Button, TextInput, View, StyleSheet, Modal, Image} from "react-native";
import {useState} from "react";

export function GoalInput({onAddGoal, visible, closeModal}) {
  const [goalText, setGoalText] = useState();

  return (
    <Modal visible={visible} animationType={'slide'}>
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/goal.png')}
               style={styles.image}/>
        <TextInput style={styles.textInput}
                   placeholder={"Your course goal ..."}
                   onChangeText={(value) => setGoalText(value)}
                   value={goalText}
        />
        <View style={styles.buttonContainer}>
          <Button title={"Add goal"}
                   onPress={() => {
                     onAddGoal(goalText)
                     setGoalText("");
                     closeModal();
                   }}/>
          <Button title={'Cancel'}
                  onPress={()=> {
            closeModal();
            setGoalText("");
          }}/>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#311b6b',
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    backgroundColor: '#e4d0ff',
    width: '90%',
    padding: 8,
    color: '#120438',
    borderRadius: 6,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 16
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 16
  }
})