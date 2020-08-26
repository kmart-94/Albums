import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList'

function App() {
  return (
    <SafeAreaView style={styles.fullScreen}>
      <Header title='Albums' />
      <View style={styles.container}>
        <AlbumList/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    justifyContent: 'center',
  },
  fullScreen: {
    flex: 1
  }
});

export default () => {
  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  )
}
