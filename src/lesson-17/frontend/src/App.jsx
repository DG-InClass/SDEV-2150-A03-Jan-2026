import Header from './components/Header';
import PageLayout from './components/layout/PageLayout';
import { Outlet } from 'react-router';

function App() {
  return <PageLayout header={<Header tagline="Find the right resources, right away"></Header>}>
    <Outlet />
  </PageLayout>
}

export default App;
