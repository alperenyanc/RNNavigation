import React, { Component } from 'react'
import { Text, StyleSheet, View,Button } from 'react-native'

export default class ContactScreen extends Component {
    

    render() {
        const {goBack} = this.props.navigation;
        return (
            <View style={styles.container} >
                <Text> ContactScreen </Text>
                <Button title="go back" onPress={() => goBack(null)} />

                
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
