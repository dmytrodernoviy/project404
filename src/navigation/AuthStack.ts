import { createStackNavigator } from 'react-navigation-stack';
import { SignInScreen, SignUpScreen } from '@src/features/authorization';
import { screenNames } from '@src/constants';

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
