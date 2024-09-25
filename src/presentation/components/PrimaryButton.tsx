import {Platform, Pressable, StyleSheet, Text} from 'react-native';

interface Props {
  label?: string;
  onPress?: () => void;
  onLongPress?: () => void;
}

export const PrimaryButton = ({
  label = 'Button',
  onLongPress,
  onPress,
}: Props) => {
  return (
    <Pressable
      style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}
      onPress={() => onPress && onPress()}
      onLongPress={() => onLongPress && onLongPress()}>
      <Text style={{color: Platform.OS === 'android' ? 'white' : '#4746A6'}}>
        {label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Platform.OS === 'android' ? '#5856D6' : 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonPressed: {
    backgroundColor: Platform.OS === 'android' ? '#201ea0' : 'white',
  },
});

export default PrimaryButton;
