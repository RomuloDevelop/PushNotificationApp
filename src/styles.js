import { StyleSheet } from 'react-native';
const colors = {
    lightColor: '#8C464C',
    blackColor: '#8C232C',
    ultraBlackColor: '#592C28',
    background: '#eeeeee'
};

const globalStyle = StyleSheet.create({
    container: {flex:1,backgroundColor: colors.background, padding:15}
});

export {colors, globalStyle};