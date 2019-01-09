import {createStackNavigator} from 'react-navigation'

import Main from './pages/Main'
import Produto from './pages/Produto'

export default createStackNavigator({
    Main,
    Produto
},{
  navigationOptions: {
    headerStyle: {
        backgroundColor: "#DA552F",
    },
    headerTintColor: "#FFF"
  }  
})