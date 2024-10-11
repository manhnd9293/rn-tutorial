import {View, TextInput, StyleSheet, Alert} from "react-native";

import PrimaryButton from "../components/PrimaryButton";
import {useState} from "react";

function StartGameScreen({onConfirm}) {
  const [inputText, setInputText] = useState('');

  function resetInputNumber() {
    setInputText('');
  }

  function handleConfirmNumber() {
    const n = parseInt(inputText);
    if(isNaN(n) || n <= 0 || n > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be between 1 and 99',
        [
          {text: 'Ok', style: 'destructive', onPress: resetInputNumber}
        ]
      )
    }
    onConfirm(n);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.numberInput}
                 maxLength={2}
                 keyboardType={'number-pad'}
                 autoCapitalize={'none'}
                 autoCorrect={false}
                 onChangeText={setInputText}
                 value={inputText}
      />
      <View style={styles.btnContainer}>
        <PrimaryButton onPress={resetInputNumber}>Reset</PrimaryButton>
        <PrimaryButton onPress={handleConfirmNumber}>Confirm</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#460924',
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  btnContainer: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})

export default StartGameScreen;