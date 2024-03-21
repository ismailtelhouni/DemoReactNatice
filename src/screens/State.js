import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';

const State = () => {
    // Déclare une nouvelle variable d'état nommée "count"
  const [count, setCount] = useState(0);
  return (
    <View style={ styles.container } >
        <Text> You clicked { count } times </Text>
        <Button title='Click me' onPress={ ()=> setCount( count + 1 ) } />
    </View>
  )
}

export default State;

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