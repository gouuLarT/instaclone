import { Divider } from 'react-native-elements';
import BottomTabs from './src/components/BottomTabs';
import { Home } from './src/screens/HomeScreen';
import { View, StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1}}>
      <StatusBar
        backgroundColor='black'
        barStyle='light-content' />
      <Home />
      <Divider 
      width={0.2}
      />
      <BottomTabs />
    </View>
  );
}
