import {Button, FlatList, StatusBar, StyleSheet, View} from 'react-native';
import {useState} from "react";
import {GoalItem} from "./components/GoalItem";
import {GoalInput} from "./components/GoalInput";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  let [showModal, setShowModal] = useState(false);

  function handleAddGoal(goalText) {
    setGoalList(gl => [...gl, {id: Math.random().toString(), text: goalText}]);
  }

  function deleteGoalItemHandler(id) {
    setGoalList(gl => gl.filter(g => g.id !== id));
  }

  function startAddGoalHandler() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <>
      <StatusBar style={'auto'}/>
      <View style={styles.appContainer}>
      <Button title={'Add New Goal'}
              onPress={startAddGoalHandler}
              color={'#6341b6'}
      />
      <GoalInput onAddGoal={handleAddGoal}
                 visible={showModal}
                 closeModal={closeModal}
      />

      <View style={styles.goalContainer}>
        <FlatList data={goalList}
                  keyExtractor={(item) => item.id}
                  renderItem={(goalData) => {
                    return <GoalItem data={goalData.item}
                                     onDelete={deleteGoalItemHandler}
                    />
                  }}/>
      </View>
    </View></>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
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
