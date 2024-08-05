// components/TaskItem
import React from 'react';
import { View, Text, Button } from 'react-native';

const TaskItem = ({ task, onComplete, onDelete, onEdit }) => {
  return (
    <View>
      <Text>{task.title}</Text>
      <Button title="Complete" onPress={onComplete} />
      <Button title="Delete" onPress={onDelete} />
      <Button title="Edit" onPress={onEdit} />
    </View>
  );
};

export default TaskItem;
