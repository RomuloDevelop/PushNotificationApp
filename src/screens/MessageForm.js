import React, { useState, useRef } from "react";
import {View} from 'react-native';
import { Container, Content, Textarea, Form, Item, Label, Input, Button, Text, H3 } from "native-base";
import LoaderScreen from '../components/LoaderScreen';
import SendCode from '../components/SendCode';
import { globalStyle, colors } from '../styles';
import axios from 'axios';
import appAlert from '../helpers/appAlert';

class MessageForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body:'',
      load: false
    }
  }
    render(){
    return (
      <Container >
        <LoaderScreen loading={this.state.load}/>
        <SendCode ref={(ref)=>this.modal = ref} onSubmit = {(code)=>{
            this.modal.Close();
            this.setState(()=>({load:true}),()=>{
              axios.post('https://dicappconsurso.herokuapp.com/api/client/message', {
                title:this.state.title,
                body:this.state.body,
                code
              })
              .then((response)=>{
                console.log(response);
              })
              .catch((error)=>{
                  if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    appAlert('No autorizado','Clave incorrecta');
                  } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    appAlert('Error','Ocurrio un error al enviar el mensaje');
                    console.log(error.request);
                  } else {
                    // Something happened in setting up the request that triggered an Error
                    appAlert('Error','Ocurrio un error al enviar el mensaje');
                    console.log('Error', error.message);
                  }
                  console.log(error.config);
              })
              .finally(()=>this.setState({load:false}));
            });
          }}/>
        <Content contentContainerStyle={[globalStyle.container, {backgroundColor:'#ffffff'}]}>
          <View style={{margin:15}}>
            <H3>Crear Mensaje</H3>
            <Text style={{marginTop:10}}>Envia un mensaje a todo el grupo colocando un titulo y su descripción</Text>  
          </View>
          <Form>
            <Item floatingLabel>
              <Label>Titulo</Label>
              <Input value={this.state.title} onChangeText={(value)=>this.setState({title:value})} 
                maxLength={25}/>
            </Item>
            <Textarea rowSpan={5} bordered placeholder="Cuerpo del mensaje" 
                value={this.state.body}
                onChangeText={(value)=>this.setState({body:value})}/>
          </Form>
          <Button block style={{marginTop:10, backgroundColor:colors.blackColor}} onPress={()=>{this.modal.Open()}}>
            <Text>Enviar</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default MessageForm;