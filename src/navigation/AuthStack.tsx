import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { screenNames } from '@src/constants';
import AuthScreen from '@src/features/authorization';

const Stack = createStackNavigator();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name={screenNames.AuthScreen} component={AuthScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
