import React, {Component} from 'react';
import {Text, StyleSheet, View,Button} from 'react-native';

export default class EventScreen extends Component {
    static navigationOptions ={
        title:  'Event',
     
    }
  render() {
      const {push,navigate,goBack}=this.props.navigation
    return (
      <View style={styles.container}>
        <Text> Events </Text>
        <Button 
        color='black'
         onPress={()=>navigate('Home')}
         title='Go to HomeScreen'
         />
         <Button
            title='go back '
            onPress={()=>goBack()}

         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
