// Screen2.js

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Screen2({ navigation }) {
  return (
    <View style={ styles.container }>
      <Text>Screen 2</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  containerButton:{
    flexDirection:'row'
  }
});