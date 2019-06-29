import AsyncStorage from '@react-native-community/async-storage';

const messageListKey = "messageList";

async function storeData(value){
  try {
    await AsyncStorage.setItem(messageListKey, JSON.stringify(value));
  } catch (e) {
    throw e;
  }
}

async function getData(){
  try {
    const value = await AsyncStorage.getItem(messageListKey);
    return JSON.parse(value)
  } catch(e) {
    throw e;
  }
}

export {
  storeData,
  getData
}