import { createStackNavigator } from 'react-navigation-stack';
import { screenNames } from '@src/constants';
import AuthScreen from '@src/features/authorization';

const AuthStack = createStackNavigator(
  {
    [screenNames.AuthScreen]: AuthScreen,
  },
  {
    headerMode: 'none',
  },
);

export default AuthStack;
