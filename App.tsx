import { View, StatusBar } from 'react-native';
import { LogIn } from './src/screens/LogIn';

export default function App() {
  return (
    <View style={{ flex: 1}}>
      <StatusBar
        backgroundColor='black'
        barStyle='light-content' />
        <LogIn />
    </View>
  );
}
