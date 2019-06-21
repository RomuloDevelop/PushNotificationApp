import React, {Component} from 'react';
import {Card, CardItem, Text, Body } from "native-base";

const MessageCard = (props)=>(
    <Card>
      <CardItem header bordered>
        <Text>{props.title}</Text>
      </CardItem>
      <CardItem bordered>
        <Body>
          <Text>{props.body}</Text>
        </Body>
      </CardItem>
    </Card>
);

export default MessageCard;