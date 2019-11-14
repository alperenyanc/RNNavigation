import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class CategoryScreen extends Component {
    render() {
        return (
            <View>
                <Text> CategoryScreen </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({ 
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
