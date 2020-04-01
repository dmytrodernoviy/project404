import { createStackNavigator } from 'react-navigation-stack';
import SignInScreen from '@src/features/authorization/signIn';
import { screenNames } from '@src/constants';

const AuthStack = createStackNavigator(
  {
    [screenNames.SignInScreen]: SignInScreen
  },
  {
    initialRouteName: screenNames.SignInScreen,
    headerMode: 'none'
  }
);

export default AuthStack;
