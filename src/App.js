import { useFonts } from 'expo-font';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import AppNavigator from './navigation';
import { Categories, Products, Product } from './screens';



export default function App() {
  const [loaded] = useFonts({
    'Ubuntu-Bold' : require('../assets/fonts/Ubuntu-Bold.ttf'),
    'Ubuntu-Italic' : require('../assets/fonts/Ubuntu-Italic.ttf'),
    'Ubuntu-Light' : require('../assets/fonts/Ubuntu-Light.ttf'),
    'Ubuntu-Medium' : require('../assets/fonts/Ubuntu-Medium.ttf'),
    'Ubuntu-Regular' : require('../assets/fonts/Ubuntu-Regular.ttf'),
  });
  //si no carga la fuente, cargo el ActivityIndicator
  if (!loaded) {
    return (
    <View styles={styles.container}>
      <ActivityIndicator color='#5CD1FF' size="large" />
    </View>
    );
  }

  return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  }
})

