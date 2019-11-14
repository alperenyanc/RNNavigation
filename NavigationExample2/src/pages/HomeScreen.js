import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';

class TitleLogo extends Component {
  render() {
    return (
      <Image
        style={{
          width: 38,
          height: 38,
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        source={require('../assets/icon-header.png')}
      />
    );
  }
}

export default class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: <TitleLogo />,
      //  headerRight: (
      //    <TouchableOpacity style={{marginHorizontal:20,marginVertical:20}}  onPress={() => alert('button right')}>
      //      <Text style={{fontSize:20}} >Right</Text>
      //    </TouchableOpacity>
      // ),
      headerRight: (
        <TouchableOpacity
          style={{marginHorizontal: 20, marginVertical: 20}}
          onPress={() => navigation.navigate('AboutModal')}>
          <Image
            style={{height: 38, width: 38}}
            source={require('../assets/icon-banana.png')}
          />
          <Text>About</Text>
        </TouchableOpacity>
      ),
    };
  };
  render() {
    const {navigate, push} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text> Senelere göre şampiyonluklar </Text>

        <Button
          title="go Contact"
          onPress={() =>
            navigate('Contact', {
              title: 'contact',
            })
          }
        />

        <Button
          title="2017-2018"
          onPress={() =>
            navigate('Detail', {
              title: 'Beşiktaş Şampiyon',
            })
          }
        />
        <Button
          title="2018-2019"
          onPress={() =>
            navigate('Detail', {
              title: 'GençlerBirliği Şampiyon',
            })
          }
        />
        <Button title="2019-2020" onPress={() => navigate('Detail')} />
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
