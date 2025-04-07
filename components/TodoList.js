import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import TodoItem from './TodoItem';

export default function TodoList() {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Feed the cat', completed: false },
        { id: 2, text: 'Work on React code', completed: false }
    ]);
    const [text, setText] = useState('');
    function addTask() {
        const newTask = { id: Date.now(), text, completed: false };
        setTasks([...tasks, newTask]);
        setText('');
    }
    function toggleCompleted(id) {
        setTasks(tasks.map(task => (task.id === id ? {...task, completed: !task.completed } : task)));
    }
    return (
        <View>
        <View style={styles.inputRow}>
        <TextInput
            style = {styles.textInput}
            value={text}
            onChangeText={setText}
            placeholder="New Task"
            placeholderTextColor = '#d9d9d9'
            />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
            <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
            </View>
        {tasks.map(task => (
            <TodoItem
                key={task.id}
                task={task}
                toggleCompleted={toggleCompleted}/> 
        ))}
        </View>
    )
}
const styles = StyleSheet.create({
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    textInput: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        borderRadius: 12,
        padding: 10,
        fontSize: 16,
        fontFamily: 'SFProDisplay-RegularItalic',
        marginRight: 10,
    },
    addButton: {
        backgroundColor: '#477355',
        borderRadius: 30,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24,
        lineHeight: 24,
        fontWeight: 'bold',
    },
});