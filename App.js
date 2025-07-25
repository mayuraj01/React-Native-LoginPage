import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import LoginScreen from './components/LoginScreen';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <LoginScreen />
    </SafeAreaView>
  );
}
