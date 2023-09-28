import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../screens/HomeScreen';
import { LogIn } from '../screens/LogIn';
import { SignIn } from '../screens/SignIn';
import { ProfileScreen } from '../screens/Profile';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen
        name="Profile"
        component={ProfileScreen}
      />
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="LogIn"
        component={LogIn}
      />
      <Screen
        name="SignIn"
        component={SignIn}
      />
    </Navigator>
  )
}
