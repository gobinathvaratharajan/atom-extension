import { Login, Register } from 'views';

export const RootRoutes = [
  {
    path: '/',
    view: <p>Welcome user!</p>,
    title: 'Dashboard'
  },
  {
    path: '/login',
    view: Login,
    title: 'Login'
  },
  {
    path: '/register',
    view: Register,
    title: 'Register'
  }
];
