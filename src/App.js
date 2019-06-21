import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import { Container, Content, Icon } from "native-base";
import OneSignal from 'react-native-onesignal'; // Import package from node modules
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import MessageCard from './components/MessageCard';
import NoDataIcon from './components//NoDataIcon';

import MessageForm from './MessageForm';

class MessageList extends Component {
  constructor(props) {
    super(props);
    OneSignal.init("2dc2ed30-fc1d-42a0-8a79-0543959da4df");

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
    OneSignal.configure(); 	// triggers the ids event

    this.state = {
     messages:[]
    };
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived = (notification) => {
    console.log("Notification received: ", notification);
    const {title, body} = notification.payload;
    const messages = [...this.state.messages];
    messages.push({title,body});
    this.setState({messages});
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
    <Container>
      <Content contentContainerStyle={this.state.messages.length <= 0?{flex: 1}:{}}>
      {(this.state.messages.length <= 0)?
          (<NoDataIcon text="Sin mensajes para mostrar"/>):
          this.state.messages.map((item, index)=>(
            <MessageCard key={index} title={item.title} body={item.body}/>
      ))}
      </Content>
    </Container>
    );
  }
}

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
    activeBackgroundColor:'#34B3E6',
    inactiveBackgroundColor:'#2C96BF',
    labelStyle: {
      fontSize: 15,
      color:'white'
    }
  }
});

export default createAppContainer(AppNavigator)