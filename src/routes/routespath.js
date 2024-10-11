import { Home } from '../page/public/home';
import Checkout from '../page/public/checkout';
import { pagamentoSim } from '../page/pagamentoOk';
import Produto from '../page/public/produto';

export const RoutesPath = {

  '/': Home,
  '/pagamento_ok': pagamentoSim,
  '/checkout': Checkout,
  '/produto':Produto,

};
