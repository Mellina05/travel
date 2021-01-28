import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import LandingPage from './src/screens/LandingPage';
import CreatePlanPage from './src/screens/CreatePlanPage';
 
const RootStack = createStackNavigator();
 
const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Landing" component={LandingPage} />
        <RootStack.Screen name="CreatePlan" component={CreatePlanPage} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
 
export default App;