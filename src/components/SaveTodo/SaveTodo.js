import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './SaveTodo.styles';

const SaveTodo = ({newTitle, setNewTitle, addNewToDo}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Yapılacak..."
        placeholderTextColor={'#5e6669'}
        onChangeText={text => setNewTitle(text)}
      />
      <TouchableOpacity
        style={styles.text_container_disabled}
        onPress={() => addNewToDo(newTitle)}>
        <Text style={styles.text}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SaveTodo;
