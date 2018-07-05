/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './src/Counter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Counter />
      </View>
    );
  }
}
