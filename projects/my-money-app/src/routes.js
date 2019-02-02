import React from 'react';
import DefaultLayout from './containers/DefaultLayout';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Lista = React.lazy(() => import('./views/CicloPagamento/Lista'));
const Cadastro = React.lazy(() => import('./views/CicloPagamento/Cadastro'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/ciclo-pagamento', exact: true, name: 'Ciclo de Pagamento', component: Lista },
  { path: '/ciclo-pagamento/novo', name: 'Novo', component: Cadastro },
  { path: '/ciclo-pagamento/:id(\\d+)', name: 'Edição', component: Cadastro },
];

export default routes;
