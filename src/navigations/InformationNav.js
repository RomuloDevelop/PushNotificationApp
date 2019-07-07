import { createStackNavigator, NavigationActions } from 'react-navigation';
import InformationList from '../screens/InformationList';

const InformationNav = createStackNavigator({
  InformationList: {
    screen: InformationList
  }
},{
  defaultNavigationOptions: {
    header:null
  }
})

export default InformationNav;