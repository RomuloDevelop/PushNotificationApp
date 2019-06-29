import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import { Container, Content } from "native-base";
import OneSignal from 'react-native-onesignal';
import MessageCard from '../components/MessageCard';
import NoDataIcon from '../components//NoDataIcon';
import {colors, globalStyle} from '../styles';
import { storeData, getData }from '../messageStore';

class MessageList extends Component {
  constructor(props) {
    super(props);
    OneSignal.addEventListener('received', this.onReceived);
    this.state = {
     messages:[]
    };
  }

  componentDidMount() {
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
    OneSignal.removeEventListener('received', this.onReceived);
  }

  onReceived = (notification) => {
    console.log("Notification received: ", notification);
    const {title, body} = notification.payload;
    const messages = [...this.state.messages];
    messages.push({title,body});
    storeData(messages).then(()=>{
      this.setState({messages});
    })
    .catch(ex=>alert('Ocurrio un error al guardar mensajes'));
  }

  render() {
    return (      
    <Container>
      <Content contentContainerStyle={this.state.messages.length <= 0?styles.noData:globalStyle.container}>
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
  noData: {flex: 1, backgroundColor: colors.background}
})

export default MessageList;