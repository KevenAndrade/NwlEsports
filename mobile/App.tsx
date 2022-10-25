import { StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Background } from './src/components/Background'

export default function App() {
  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

    </Background>
  );
}