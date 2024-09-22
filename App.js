import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInputStyle} placeholder={'Your course goal ...'}/>
          <Button title={'Add goal'} onPress={() => console.log('Tap')}/>
        </View>
      </View>
      <View style={styles.goalContainer}>
        <Text style={{marginTop: 10}}>List of goals ...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  inputContainer: {
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 24,
    borderBottomColor: '#a4a4a4'
  },
  textInputStyle: {
    borderWidth: 1,
    borderColor: '#575757',
    width: '80%',
    marginRight: 8,
    padding: 8,
  },
  addGoalBtnStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
  },
  goalContainer: {
    // flex: 3
  }
});
