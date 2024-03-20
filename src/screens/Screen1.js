// Screen1.js

import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Screen1({ navigation }) {
  return (
    <View style={ styles.container }>
      <Text>Screen 1</Text>
      <View style={ styles.containerButton }>  
        <Button style={{ marginRight:"2px" }} title="Go to Screen 2" onPress={() => navigation.navigate('Screen2')} />
        <Button title="Go to useState" onPress={() => navigation.navigate('State')} />
        <Button title="Go to useEffect" onPress={() => navigation.navigate('Effect')} />
      </View>
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
