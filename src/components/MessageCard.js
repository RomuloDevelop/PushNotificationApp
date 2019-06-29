import React, {Component} from 'react';
import {Card, CardItem, Text, Body } from "native-base";
import {colors} from '../styles';

const MessageCard = (props)=>(
    <Card borderRadius={5}>
      <CardItem header bordered>
        <Text style={{color: colors.blackColor}}>{props.title}</Text>
      </CardItem>
      <CardItem bordered>
        <Body>
          <Text>{props.body}</Text>
        </Body>
      </CardItem>
    </Card>
);

export default MessageCard;