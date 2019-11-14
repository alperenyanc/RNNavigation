import React from 'react'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './pages/HomeScreen';
import DetailScreen from './pages/DetailScreen';
import EventScreen from './pages/EventScreen';
import ContactScreen from './pages/ContactScreen';
import {createDrawerNavigator} from 'react-navigation-drawer';
import CategoryScreen from './pages/CategoryScreen';
import Icon from 'react-native-vector-icons/FontAwesome'
// import AboutModal from './pages/AboutModal'
import DrawerButton from './components/DrawerButton'


const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions:({navigation})=>({
        headerLeft: <DrawerButton navigation={navigation} />
      })
    },
    Detail: {screen: DetailScreen},
    Event: {screen: EventScreen},
  },
  {
    headerLayoutPreset: 'center',
  },
);
const ContactStack = createStackNavigator({
  Contact: {
    screen: ContactScreen,
    
    
  },
},{
  defaultNavigationOptions:({navigation})=>({
  headerLeft: <DrawerButton navigation={navigation} />
})});
const CategoryStack = createStackNavigator({
  Category: {
    screen: CategoryScreen,
  },
});

const Drawer = createDrawerNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions:{
        
        drawerLabel:'Anasayfa',
        drawerIcon:({tintColor})=>(         
           <Icon  name="globe" size={26} color={tintColor}  />
        ),
        
      }
    },
    Contact: {
      screen: ContactStack,
      navigationOptions:{
       // drawerLockMode:'locked-closed',
        drawerIcon:({tintColor})=>(         
          <Icon  name="id-badge" size={26} color={tintColor}  />
       )
      }
     
    },
    Category: {
      screen: CategoryStack,
    },
  },
  {
    drawerType: 'slide',
    overlayColor: 'transparent',
    style: {backgroundColor: '#f2f2f2'},
    edgeWidth: 500,
    drawerPosition:'left',
    drawerWidth:160,
    contentOptions:{
      activeTintColor:'#fff',
      inactiveTintColor:'#d03932',
      activeBackgroundColor:'#d03932',
      inactiveBackgroundColor:'#fff',
      itemStyle:{
        flexDirection:'row-reverse'
      }
    }
  },
  {
    initialRouteName: 'HomeScreen',
  },
);

export default createAppContainer(Drawer);
