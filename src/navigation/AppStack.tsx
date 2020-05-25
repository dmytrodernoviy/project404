import React, { useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationStackNames } from '@src/constants';
import { AuthStack, TabStack } from '@src/navigation/index';
import { NavigationService } from '@src/services';

const Stack = createStackNavigator();

const AppStack: React.FC = () => {
  const navigator = useRef(null);
  useEffect(() => {
    NavigationService.setTopLevelNavigator(navigator.current);
  }, []);

  return (
    <NavigationContainer ref={navigator}>
      <Stack.Navigator
        headerMode={'none'}
        initialRouteName={navigationStackNames.AuthStack}>
        <Stack.Screen
          name={navigationStackNames.AuthStack}
          component={AuthStack}
        />
        <Stack.Screen
          name={navigationStackNames.TabStack}
          component={TabStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
