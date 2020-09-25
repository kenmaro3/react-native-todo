import React, {useState, visible} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, Modal} from 'react-native';

const GoalInput = ({onAddGoal,onCancel, visible}) => {
    const [enteredGoal, setEnteredGoal] = useState('');


  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal('');
  }

  const cancelHandler = () => {
    onCancel();
      setEnteredGoal('');
  }


    return (
        <Modal visible={visible} animation="slide">
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                    />

                <View style={styles.buttonContainer}>
                    <Button 
                        title="ADD"
                        onPress={addGoalHandler}
                        // onPress={onAddGoal.bind(this, enteredGoal)}
                    />

                    <Button 
                        title="CANCEL" 
                        color="red"
                        onPress={cancelHandler}
                    />
                </View>

            </View>       
        </Modal>
 
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        width: '80%',
      
  
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    }
  });
  

export default GoalInput
