import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState('green');

  const changeColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.title}>CHỌN MÀU:</Text>
      <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]} onPress={() => changeColor('green')}>
        <Text style={styles.buttonText}>GREEN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: 'blue' }]} onPress={() => changeColor('blue')}>
        <Text style={styles.buttonText}>BLUE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: 'brown' }]} onPress={() => changeColor('brown')}>
        <Text style={styles.buttonText}>BROWN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: 'yellow' }]} onPress={() => changeColor('yellow')}>
        <Text style={styles.buttonText}>YELLOW</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]} onPress={() => changeColor('red')}>
        <Text style={styles.buttonText}>RED</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: 'black' }]} onPress={() => changeColor('black')}>
        <Text style={styles.buttonText}>BLACK</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});