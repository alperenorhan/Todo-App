import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './Card.styles';
const Card = ({todos, longPressHandler, toggleHandler}) => {
  const renderTodo = ({item}) => (
    <TouchableOpacity
      onPress={() => toggleHandler(item.id)}
      onLongPress={() => longPressHandler(item.id)}
      style={item.completed ? styles.completed_container : styles.container}>
      <Text style={item.completed ? styles.completed_text : styles.text}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
  return (
    <FlatList
      data={todos}
      renderItem={renderTodo}
      keyExtractor={item => item.id.toString()}
    />
  );
};
export default Card;
