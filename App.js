import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import Screen1 from './src/screens/Screen1';
import Screen2 from './src/screens/Screen2';
import State from './src/screens/State';
import Effect from './src/screens/Effect';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen name="Screen1" component={ Screen1 } />
        <Stack.Screen name="Screen2" component={ Screen2 } />
        <Stack.Screen name="State" component={ State } />
        <Stack.Screen name="Effect" component={ Effect } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
