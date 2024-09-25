import {SafeAreaView} from 'react-native';
import HelloWorld from './src/presentation/screens/HelloWorld';
import CounterScreen from './src/presentation/screens/CounterScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <HelloWorld name="Jhon" /> */}
      <CounterScreen />
    </SafeAreaView>
  );
};

export default App;
