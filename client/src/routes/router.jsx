import { Login, Register } from 'views';

export const RootRoutes = [
  {
    path: '/login',
    view: Login,
    title: 'Login'
  },
  {
    path: '/',
    view: Register,
    title: 'Register'
  }
];
