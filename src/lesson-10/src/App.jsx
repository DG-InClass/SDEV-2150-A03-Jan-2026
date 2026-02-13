import Header from './components/Header';
import Filters from './components/Filters';
import Results from './components/Results';
import Details from './components/Details';
import PageLayout from './components/layout/PageLayout';
import styles from './App.module.css';

function App() {
  return (
    <PageLayout header={<Header tagline="Find the right resources, right away" />}>
      <aside className={styles.filter}>
        <Filters />
      </aside>
      <aside className={styles.results}>
        <Results />
      </aside>
      <aside className={styles.details}>
        <Details />
      </aside>
    </PageLayout>
  );
}

export default App;
