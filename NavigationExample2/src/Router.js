import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './pages/HomeScreen';
import DetailScreen from './pages/DetailScreen';
import EventScreen from './pages/EventScreen';
import AboutModal from './pages/AboutModal'





const MainStack = createStackNavigator({
    Home: {screen: HomeScreen},
    Detail: {screen: DetailScreen},
    Event:{screen:EventScreen}
  },{
    initialRouteName:'Home',
    headerLayoutPreset:'center',
    defaultNavigationOptions:{
      headerBackTitle:'Geri',
      headerStyle:{
        backgroundColor:'#f2f2f2',
      },
      headerTintColor:'black',
      headerTitleStyle:{
        fontWeight:'400',
        
      },
      // headerTransparent:true,
     
    }
  });

  const ModalStack = createStackNavigator({
    Main:MainStack,
    Modal:AboutModal
  },{
      mode:'modal',
      headerMode:'none'}
  );
  
  export default createAppContainer(ModalStack);
  