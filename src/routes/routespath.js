import { Home } from '../page/public/home';
import Checkout from '../page/public/checkout';
import { pagamentoSim } from '../page/pagamentoOk';
import Produto from '../page/public/produto';
import { pagamentoRec } from '../page/pagamentoREC';
import Login from '../page/public/login';
import Cadastro from '../page/public/cadastro';
import { Error } from '../page/public/ERROR';
import Usuario from '../page/public/Usuario';
import Adc_Produto from '../page/public/adc_Produto';

export const PrivateRoutesPath = {
  '/home': Home,
  '/carrinho': Checkout,
  '/produto': Produto,
  '/usuario': Usuario,
  '/adc_Produto': Adc_Produto,
};

export const RoutesPath = {
  '/': Login,
  '/cadastro': Cadastro,
  '/pagamento_ok': pagamentoSim,
  '/pagamento_rec': pagamentoRec,
  '/*': Error,
}
