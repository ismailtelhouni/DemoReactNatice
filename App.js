import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './src/screens/Screen1';
import Screen2 from './src/screens/Screen2';
import State from './src/screens/State';
import Effect from './src/screens/Effect';
import HomeScreen from './src/screens/HomeScreen';
import AddTaskScreen from './src/screens/AddTaskScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import AboutDarlkhirScreen from './src/components/AboutDarlkhirScreen';
import PrivacyPolicyScreen from './src/components/PrivacyPolicyScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen name="Screen1"  component={ Screen1 } />
        <Stack.Screen name="Screen2"  component={ Screen2 } />
        <Stack.Screen name="State"    component={ State } />
        <Stack.Screen name="Effect"   component={ Effect } />
        <Stack.Screen name="Home"     component={ HomeScreen } />
        <Stack.Screen name="AddTask"  component={ AddTaskScreen } />
        <Stack.Screen name="Profile"  component={ ProfileScreen } />
        <Stack.Screen name="AboutDarlkhirScreen"  component={ AboutDarlkhirScreen } />
        <Stack.Screen name="PrivacyPolicyScreen"  component={ PrivacyPolicyScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}