import {Text, View, StyleSheet, Pressable} from "react-native";

export function GoalItem({data, onDelete}) {

  return (
    <View style={styles.goalItem}>
      <Pressable onPress={() => onDelete(data.id)}
                 android_ripple={{color: '#dddddd'}}
                 style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{data.text}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  goalItem: {
    color: 'white',
    backgroundColor: 'orange',
    marginTop: 8
  },
  goalText: {
    color: 'white',
    padding: 8
  },
  pressedItem: {
    opacity: 0.5
  }
})