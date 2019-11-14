import React, { Component } from 'react'
import { TouchableOpacity,StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


export default class DrawerButton extends Component {
    toogleMenu = () =>{
            this.props.navigation.toggleDrawer();
    };
    render() {
        return (
            <TouchableOpacity 
            onPress={this.toogleMenu}
            style={styles.headerMenu} >
                <Icon
                    name="bars"
                    size={24}

                />
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    headerMenu:{
       paddingHorizontal:10,
       paddingVertical:10
    }
})


