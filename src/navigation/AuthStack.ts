import { createStackNavigator } from 'react-navigation-stack';
import { screenNames } from '@src/constants';
import { SignInScreen, SignUpScreen } from '@src/features/authorization';

const AuthStack = createStackNavigator(
  {
    [screenNames.SignInScreen]: SignInScreen,
    [screenNames.SignUpScreen]: SignUpScreen,
  },
  {
    initialRouteName: screenNames.SignInScreen,
    headerMode: 'none',
  },
);

export default AuthStack;
