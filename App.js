import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);


    const addGoalHandler = (goalTitle) => {
        console.log(goalTitle);
        setCourseGoals(currentGoals=> [
            ...currentGoals, 
            {id: Math.random().toString(), value: goalTitle}
        ]);

        setIsAddMode(false);
    }

    
    const removeGoalHandler = (goalId) => {
        setCourseGoals(currentGoals => {
            return currentGoals.filter((goal) => goal.id !== goalId)
        });
    }

    const cancelGoalHandler = () => {
        setIsAddMode(false);
    }

  return (
    <View style={{padding: 100}}>
        <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
            <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalHandler}/>

            <FlatList 
                keyExtractor={(item, index) => item.id}
                data={courseGoals} 
                renderItem={itemData => (
                    <GoalItem 
                        title={itemData.item.value}
                        onDelete={() => {removeGoalHandler(itemData.item.id)}}
                        
                        />
            )}/>


        <View>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    width: '80%',
    

  },

  listItem: {
      padding: 10,
      marginTop: 10,
      backgroundColor: "#ccc",
      borderColor: "black",
      borderWidth: 1,
  }
});
