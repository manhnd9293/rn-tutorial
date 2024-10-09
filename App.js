import {FlatList, StyleSheet, View} from 'react-native';
import {useState} from "react";
import {GoalItem} from "./components/GoalItem";
import {GoalInput} from "./components/GoalInput";

export default function App() {
  const [goalList, setGoalList] = useState([]);

  function handleAddGoal(goalText) {
    setGoalList(gl => [...gl, {id: Math.random().toString(), text: goalText}]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={handleAddGoal}/>

      <View style={styles.goalContainer}>
        <FlatList data={goalList}
                  keyExtractor={(item) => item.id}
                  renderItem={(goalData) => {
                    return <GoalItem data={goalData.item}/>
                  }}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  addGoalBtnStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
  },
  goalContainer: {
    flex: 5,
    marginTop: 8,
    display: 'flex',
    gap: 8
  },
});
