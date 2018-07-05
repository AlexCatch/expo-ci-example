import React from 'react';
import {
  View, Text, Button, StyleSheet,
} from 'react-native';

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 21,
    marginBottom: 10,
  },
});

export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    const { number } = this.state;
    this.setState({ number: number + 1 });
  }

  render() {
    const { number } = this.state;
    return (
      <View style={style.container}>
        <Text style={style.text}>
          {number}
        </Text>
        <Button testID="incrementButton" title="Increment" onPress={this.increment} />
      </View>
    );
  }
}
