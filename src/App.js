import React, {Component} from 'react';
import OneSignal from 'react-native-onesignal';
import { createAppContainer } from 'react-navigation';
import AppNav from './navigations/AppNav';

const AppContainer = createAppContainer(AppNav);

class App extends Component {
  constructor(props) {
    super(props);
    OneSignal.init("2dc2ed30-fc1d-42a0-8a79-0543959da4df");
    OneSignal.addEventListener('ids', this.onIds);
    OneSignal.enableVibrate(true);
    OneSignal.enableSound(true);
    OneSignal.configure(); 	// triggers the ids event

    this.state = {
     messages:[]
    };
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }
  render() {
    return (
      <AppContainer/>
    );
  }
}

export default App;