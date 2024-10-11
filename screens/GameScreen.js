import React from 'react';
import {Text, View, StyleSheet} from "react-native";

function GameScreen({chooseNumber}) {
  return (
    <View style={styles.screen}>
      <Text>Game screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 32,
    marginHorizontal: 16
  }
})

export default GameScreen;