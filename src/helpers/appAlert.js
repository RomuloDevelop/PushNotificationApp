import {Alert} from 'react-native';
function appAlert(title,answer,onPressOK, onPressCancel){
    const buttons = (!onPressOK)?[{text:'OK'}]:
      [
        {
          text: 'Cancelar',
          onPress: async () => {
              if(onPressCancel)
                await onPressCancel();
              console.log('Cancel Pressed');
            },
          style: 'cancel',
        },
        {
          text: 'OK', onPress:onPressOK
        },
      ]
    Alert.alert(
      title,
      answer,
      buttons,
      {cancelable: false},
    );
  }

  export default appAlert;