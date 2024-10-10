import {View, Text, Pressable, StyleSheet} from "react-native";

function PrimaryButton({children}) {
  function pressHandler() {
    console.log('btn pressed')
  }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable onPress={pressHandler}
                 style={({pressed}) => pressed ?
                   [styles.pressedBtn, styles.buttonInnerContainer ] : [styles.buttonInnerContainer]}
                 android_ripple={{color: "#a42e6a"}}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    flex: 1,
    borderRadius: 28,
    overflow: 'hidden',
    margin: 4,
  },
  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#7c0f44',
    elevation: 2,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center'
  },

  pressedBtn :{
    opacity: 0.75,
  }
})

export default PrimaryButton;