import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

export default class DetailScreen extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('title','Henüz Sonuçlanmadı'),
            
          
        }
    }  
  render() {
    const {navigate, push, goBack, getParam} = this.props.navigation;
    const title = getParam('title', 'Default Title');

    return (
      <View style={styles.container}>
        <Text> {title} </Text>
        <Button
          title="go to Events page"
          onPress={() => push('Event')}
          // onPress={()=>push('Event')}
          color="green"
        />
        <Button title="go back" onPress={() => goBack()} />
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
