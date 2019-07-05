import { createStackNavigator, createAppContainer } 
    from 'react-navigation';

import FormLogin from './FormLogin';
import FormRegister from './FormRegister';

const RootStack = createStackNavigator(
  {
    Main: FormLogin,
    RegisterUser: FormRegister,
  },
  {
    initialRouteName: 'Main',
  },
);

const Routes = createAppContainer(RootStack);

export default Routes;
