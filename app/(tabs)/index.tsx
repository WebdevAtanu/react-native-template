import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.Container}>
      <Text style={styles.Text}>My first React Native App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'red',
    height:'100%',
    padding:5,

  },
  Text: {
    fontSize:16,
    fontWeight:'bold'
  },
});
