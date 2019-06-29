import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import { Icon } from "native-base";
import OneSignal from 'react-native-onesignal';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import MessageList from './screens/MessageList';
import MessageForm from './screens/MessageForm';
import {colors} from './styles';

const styles = StyleSheet.create({
  iconNavStyle:{color:"white", fontSize:20}
});

const AppNavigator = createBottomTabNavigator({
  Home: {
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
    inactiveBackgroundColor: colors.blackColor,
    labelStyle: {
      fontSize: 15,
      color:'white'
    }
  }
});

const AppContainer = createAppContainer(AppNavigator);

class App extends Component {
  constructor(props) {
    super(props);
    OneSignal.init("2dc2ed30-fc1d-42a0-8a79-0543959da4df");

    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
    OneSignal.configure(); 	// triggers the ids event

    this.state = {
     messages:[]
    };
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }
  render() {
    return (
      <AppContainer/>
    );
  }
}

export default App;