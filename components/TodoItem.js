import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function TodoItem({ task, toggleCompleted }) {
    return (
        <View style={styles.taskItem}>
            <View style={styles.checkboxWrapper}>
            <BouncyCheckbox
                isChecked={task.completed}
                onPress={() => toggleCompleted(task.id)}
                fillColor='#477355'
                iconStyle={{ borderColor: '#ccc' }}
                size={25}
                disableBuiltInState
            />
            </View>
            <Text style= {[
                styles.taskText,
                { textDecorationLine: task.completed ? 'line-through' : 'none', color: task.completed ? '#aaa' : '#333'}]}>{task.text}
                </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    taskItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    taskText: {
        flexShrink: 1,
        fontSize: 17,
        fontFamily: 'SFProDisplay-Regular',
        color: 'black',
    },
});