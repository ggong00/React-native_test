import { StyleSheet, Text, View } from 'react-native';
import MyText from './component/MyTest';

export default function App() {
  return (
    <View style={styles.container}>
      <MyText bold={'bold'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});