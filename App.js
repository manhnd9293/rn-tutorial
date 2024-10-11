import {ImageBackground, SafeAreaView, StyleSheet, } from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [chooseNumber, setChooseNumber] = useState();
  const screen = chooseNumber ? <GameScreen chooseNumber={chooseNumber}/> : <StartGameScreen onConfirm={onChooseNumber}/>

  function onChooseNumber(n) {
    setChooseNumber(n)
  }

  return (
    <LinearGradient colors={[ '#72063c', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode={'cover'}
        style={styles.rootScreen}
        imageStyle={styles.bgImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  bgImage: {
    opacity: 0.25
  }
});
