import React from 'react';
import {View, Linking} from 'react-native';
import { List, ListItem, Icon, Text, Left, Body } from 'native-base';
import { colors } from '../styles';

const InformationList = (props) => {
    return (
        <View>
            <List>
              <ListItem itemDivider>
                <Text>Redes de Dicapp</Text>
              </ListItem>
                <ListItem noIndent onPress={()=>{
                  getLink('https://www.instagram.com/dicabeg');
                }}>
                  <Icon name='instagram' type="FontAwesome" style={{color: colors.blackColor, marginRight:10, fontSize:25}}/>
                  <Body><Text style={{fontSize:18}}>Instagram</Text></Body>
                </ListItem>
            </List>
        </View>

    );
}
async function getLink(url){
  try{
    await Linking.openURL(url);
  } catch(err){
    appAlert('Error','No es posible abrir el link');
  }
}

export default InformationList;