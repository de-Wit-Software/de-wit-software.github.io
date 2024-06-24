import RedirectGuard from '@/services/router_guard/redirect.guard';

const Home = RedirectGuard(
  () => '/nl/about',
  () => { return (<></>) }
);

export default Home;
