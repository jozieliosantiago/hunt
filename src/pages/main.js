import React, { Component } from 'react';
import { View, Text } from 'react-native';
import api from '../services/api';

export default class Main extends Component {
  static navigationOptions = {
    title: "JSHunt",
  };

  componentDidMount() {
    this.loadProducts();
  };

  loadProducts = async () => {
    const response = await api.get('/products');
    const { docs } = response.data;
  };

  render() {
    return (
      <View>
        <Text>Main page</Text>
      </View>
    )
  }
}
