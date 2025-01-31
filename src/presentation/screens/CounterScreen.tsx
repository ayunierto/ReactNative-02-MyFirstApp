import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PrimaryButton} from '../components';

export const CounterScreen = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>

      <PrimaryButton
        label="Increase"
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
  },
});

export default CounterScreen;
