import styles from './PageLayout.module.css';

export default function PageLayout({ header, children }) {
  return (
    <div className={styles.layout}>
      <header>
        {header}
      </header>

      <main>
        {children}
      </main>
    </div>
  );
}