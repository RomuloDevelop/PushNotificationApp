import React from 'react';
import {StyleSheet} from 'react-native';
import { Icon } from "native-base";
import { createBottomTabNavigator } from 'react-navigation';

import MessageList from '../screens/MessageList';
import MessageForm from '../screens/MessageForm';
import {colors} from '../styles';

const styles = StyleSheet.create({
  iconNavStyle:{color:"white", fontSize:20}
});

const MessageNav = createBottomTabNavigator({
  List: {
    screen: MessageList,
    navigationOptions:{
      tabBarIcon:<Icon type="FontAwesome" style={styles.iconNavStyle} fontSize={18} name="list-ul"/>,
      title:"Lista"
    }
  },
  Form:{
    screen: MessageForm,
    navigationOptions:{
      tabBarIcon:<Icon type="FontAwesome" style={styles.iconNavStyle} fontSize={18} name="envelope-open"/>,
      title:"Crear"
    }
  }
},{
  tabBarOptions: {
    activeBackgroundColor: colors.lightColor,
    inactiveBackgroundColor: colors.ultraBlackColor,
    labelStyle: {
      fontSize: 15,
      color:'white'
    }
  }
});

export default MessageNav;