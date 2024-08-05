// screens/TaskScreen.js
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../store/slices/tasksSlice';

const TaskScreen = ({ route, navigation }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const dispatch = useDispatch();
  const task = route.params?.task;

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setDueDate(task.dueDate);
    }
  }, [task]);

  const handleSave = () => {
    if (task) {
      dispatch(editTask({ ...task, title, description, dueDate }));
    } else {
      dispatch(addTask({ id: Date.now(), title, description, dueDate, completed: false }));
    }
    navigation.goBack();
  };

  return (
    <View>
      <TextInput placeholder="Title" value={title} onChangeText={setTitle} />
      <TextInput placeholder="Description" value={description} onChangeText={setDescription} />
      <TextInput placeholder="Due Date" value={dueDate} onChangeText={setDueDate} />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

export default TaskScreen;
