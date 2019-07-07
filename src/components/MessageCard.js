import React from 'react';
import {Card, CardItem, Text, Body, Icon } from "native-base";
import appAlert from '../helpers/appAlert';
import {colors} from '../styles';

function deleteItem(props){
  appAlert('Eliminar','¿Seguro qe quieres eliminar el item?',()=>{
    props.onPress(props.index);
  });
}

const MessageCard = (props)=>(
    <Card borderRadius={5}>
      <CardItem header bordered button onPress={()=>deleteItem(props)}>
        <Text style={{color: colors.blackColor}}>{props.title}</Text>
      </CardItem>
      <CardItem bordered button onPress={()=>deleteItem(props)}>
        <Body>
          <Text>{props.body}</Text>
        </Body>
    </CardItem>
  </Card>
);

export default MessageCard;