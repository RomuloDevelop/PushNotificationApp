import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import { Container, Content } from "native-base";
import OneSignal from 'react-native-onesignal';
import MessageCard from '../components/MessageCard';
import NoDataIcon from '../components//NoDataIcon';
import {colors, globalStyle} from '../styles';
import { storeData, getData }from '../messageStore';

class MessageList extends Component {
  constructor(props) {
    super(props);
    OneSignal.addEventListener('opened', this.onOpened);
    this.state = {
     messages:[]
    };
  }

  componentDidMount() {
    console.log('didMount');
    getData().then((data)=>{
      let messages = [];
      if(data !== null){
        messages = data;
      }
      this.setState({messages})
    })
    .catch(ex=>alert('Ocurrio un error al obtener mensajes'));
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('opened', this.onOpened);
  }

  onOpened = (openResult) => {
    console.log('in onOpened');
    getData().then((data)=>{
      let messages = [];
      if(data !== null){
        messages = data;
      }
      const {notification} = openResult;
      const {title, body} = notification.payload;
      messages.push({title,body});
      storeData(messages).then(()=>{
          this.setState({messages});
        })
        .catch(ex=>alert('Ocurrio un error al guardar mensajes'));
    })
    .catch(ex=>alert('Ocurrio un error al obtener mensajes'));
  }

  onPress = (index)=>{
      const messages = this.state.messages;
      messages.splice(index,1);
      storeData(messages).then(()=>{
          this.setState({messages});
        })
        .catch(ex=>alert('Ocurrio al eliminar mensajes'));
  }
  render() {
    return (      
    <Container>
      <Content contentContainerStyle={this.state.messages.length <= 0?styles.noData:globalStyle.container}>
      {(this.state.messages.length <= 0)?
        (<NoDataIcon text="Sin mensajes para mostrar"/>):
        (<ScrollView>
          {this.state.messages.map((item, index)=><MessageCard key={index} index={index} title={item.title} body={item.body} onPress={this.onPress}/>)}
        </ScrollView>)}
      </Content>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  noData: {flex: 1, backgroundColor: colors.background}
})

export default MessageList;