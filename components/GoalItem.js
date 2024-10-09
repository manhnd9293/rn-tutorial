import {Text, View, StyleSheet} from "react-native";

export function GoalItem({data}) {
  return (
    <View style={styles.goalItem}>
      <Text>{data.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  goalItem: {
    color: 'white',
    backgroundColor: 'orange',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 8
  }
})