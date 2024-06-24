import RedirectGuard from '@/services/router_guard/redirect.guard';

const Home = RedirectGuard(
  () => '/en/about',
  () => { return (<></>) }
);

export default Home;
