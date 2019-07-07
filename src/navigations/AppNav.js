import React from 'react';
import { Icon, Button, Text } from "native-base";
import { createStackNavigator } from 'react-navigation';
import MessageNav from './MessageNav';
import InformationNav from './InformationNav';
import {colors} from '../styles';

const AppNav = createStackNavigator({
  Home: {
    screen: MessageNav,
    navigationOptions: ({navigation})=> ({
      headerRight: (
        <Button transparent onPress={()=>navigation.navigate('Information')}>
          <Icon type='FontAwesome' name='exclamation-circle' style={{color:'#ffffff', fontSize:30}}/>
        </Button>
      ),
      headerTitle:(<Text style={{marginLeft:20, color:'#fff', fontSize:20}}>Monedero</Text>)
    })
  },
  Information: {
    screen: InformationNav,
    navigationOptions:{
      headerTitle:(<Text style={{marginLeft:20, color:'#fff', fontSize:20}}>Información</Text>)
    }
  } 
},{
  defaultNavigationOptions: {
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: colors.blackColor
    }
  }
});

export default AppNav;