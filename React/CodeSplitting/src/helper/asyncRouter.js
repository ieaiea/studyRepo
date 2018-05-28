import asyncComponent from './asyncComponent';

const Home = asyncComponent(() => import('../components/Home'));
const Signup = asyncComponent(() => import('../components/Signup'));
const Join = asyncComponent(() => import('../components/Join'));

export {Join, Signup, Home}
