import { Home } from '../page/public/home';
import Checkout from '../page/public/checkout';
import { pagamentoSim } from '../page/pagamentoOk';
import { pagamentoRec } from '../page/pagamentoREC';

export const RoutesPath = {

  '/': Home,
  '/pagamento_ok': pagamentoSim,
  '/checkout': Checkout,
  '/pagamento_rec': pagamentoRec,

};
