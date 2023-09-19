import { Home } from './src/screens/HomeScreen';
import { View, StatusBar } from 'react-native';

export default function App() {
  return (
   <View>
    <StatusBar backgroundColor='black' barStyle='light-content'/>
      <Home />
   </View>
  );
}
