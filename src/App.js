import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, StyleSheet, View, Button} from 'react-native';
import Card from './components/Card';
import SaveTodo from './components/SaveTodo/SaveTodo';
import HeaderSection from './components/HeaderSection';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [newTitle, setNewTitle] = useState('');

  useEffect(() => {
    getUncompletedTodos(todos);
  }, [todos]);

  const addNewToDo = title => {
    if (title === '') {
      alert('Please enter a task!');
    } else if (todos.some(todo => todo.title === title)) {
      alert('You cannot re-enter the same task!');
    } else {
      setTodos([...todos, {id: Date.now(), title: title, completed: false}]);
      setNewTitle('');
    }
  };

  const longPressHandler = id => {
    setTodos(todos.filter(todo => todo.id !== id));
    alert('Successfully deleted');
  };

  const toggleHandler = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed} : {...todo},
      ),
    );
  };

  const getUncompletedTodos = tasks => {
    const unCompletedTodos = tasks.filter(task => task.completed === false);
    setCount(unCompletedTodos.length);
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderSection count={count} />
      <View>
        <Card
          todos={todos}
          toggleHandler={toggleHandler}
          longPressHandler={longPressHandler}
        />
      </View>
      <View style={styles.bottom_container}>
        <SaveTodo
          newTitle={newTitle}
          setNewTitle={setNewTitle}
          addNewToDo={addNewToDo}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#112027',
    flex: 1,
  },
  bottom_container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default App;
