import React, {useState} from 'react';
import { StyleSheet, Text, View, Touchable, TouchableOpacity } from 'react-native';

const GoalItem = ({title, onDelete}) => {
    return (
        <TouchableOpacity onPress={onDelete}>
            <View style={styles.listItem}>
                <Text >
                    {title}
                </Text>
            </View>
        </TouchableOpacity>


    
    )
}

const styles = StyleSheet.create({

  
    listItem: {
        padding: 10,
        marginTop: 10,
        backgroundColor: "#ccc",
        borderColor: "black",
        borderWidth: 1,
    }
  });

export default GoalItem
