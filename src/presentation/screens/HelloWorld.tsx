import {StyleSheet, Text, View} from 'react-native';

interface Props {
  name?: string;
}

export const HelloWorld = ({name = 'World'}: Props) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
        Hello, {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 45,
    textAlign: 'center',
    color: 'white',
    padding: 20,
  },
});

export default HelloWorld;
