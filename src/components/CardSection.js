import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text} from 'react-native-elements';

export default function CardSection({children}) {
  return (
      <View style={styles.container}>
        {children}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
});
