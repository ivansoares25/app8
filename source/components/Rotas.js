import { createStackNavigator, createAppContainer } 
    from 'react-navigation';

import FormLogin from './FormLogin';
import FormCadastro from './FormCadastro';

const RootStack = createStackNavigator(
  {
    Principal: FormLogin,
    CadUsuario: FormCadastro,
  },
  {
    initialRouteName: 'Principal',
  },
);

const Rotas = createAppContainer(RootStack);

export default Rotas;
