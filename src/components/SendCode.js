import React , {useState} from 'react';
import {View} from 'react-native';
import withModal from "../containers/withModal";
import { Item, Input, Label, Form, Text, Button } from 'native-base';
import { colors } from '../styles';
import appAlert from '../helpers/appAlert';

const FormWithModal = (props) => {
    const [codigo, setCodigo] = useState('');
    return (
        <View style={{padding: 30}}>
            <Text style={{color:'#000000aa'}}>
                Ingresa el código de administrador para enviar mensajes
            </Text>
            <Form>
                <Item floatingLabel last>
                  <Label>Código</Label>
                  <Input value={codigo} onChangeText={(value)=>setCodigo(value)}/>
                </Item>
            </Form>
            <Button block style={{marginTop:10, backgroundColor:colors.blackColor}}
              onPress={()=>{
                    if(codigo)
                        props.onSubmit(codigo);
                    else
                        appAlert('Clave','Debe ingresar una clave');
                }}
            ><Text>Enviar</Text></Button>
        </View>
    );
}

const SendCode = withModal(FormWithModal);

export default SendCode;