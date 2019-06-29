import { StyleSheet } from 'react-native';
const colors = {
    lightColor: '#34B3E6',
    blackColor: '#2C96BF',
    background: '#eeeeee'
};

const globalStyle = StyleSheet.create({
    container: {flex:1,backgroundColor: colors.background, padding:15}
});

export {colors, globalStyle};