// screens/HomeScreen.js
import React from 'react';
import { View, FlatList, Button, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTaskCompletion, deleteTask } from '../store/slices/tasksSlice';

const HomeScreen = ({ navigation }) => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  return (
    <View>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Button title="Complete" onPress={() => dispatch(toggleTaskCompletion(item.id))} />
            <Button title="Delete" onPress={() => dispatch(deleteTask(item.id))} />
            <Button title="Edit" onPress={() => navigation.navigate('Task', { task: item })} />
          </View>
        )}
      />
      <Button title="Add Task" onPress={() => navigation.navigate('Task')} />
    </View>
  );
};

export default HomeScreen;
