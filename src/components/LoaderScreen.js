import React from 'react';
import {Modal, ActivityIndicator, StyleSheet, View} from 'react-native';
import {colors} from '../styles';

function LoaderScreen(props){
    const {
        loading,
        ...attributes
      } = props;
    return(
      <Modal
        transparent={true}
        animationType={'none'}
        visible={loading}
        onRequestClose={() => {console.log('close modal')}}>
        <View style={styles.modalBackground}>
          <View style={styles.indicatorContainer}>
            <ActivityIndicator
              color={colors.lightColor}
              size="large"
              animating={loading}/>
          </View>
        </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
    modalBackground: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'space-around',
      backgroundColor: '#00000040'
    },
    indicatorContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      width:'auto',
      padding:5,
      backgroundColor:'white',
      borderRadius:500,
      borderWidth: 0.3,
      borderColor: 'grey',
      elevation: 4,
      shadowOpacity: 2,
      shadowRadius: 2,
      shadowColor: '#000'
    }
  });

export default LoaderScreen;