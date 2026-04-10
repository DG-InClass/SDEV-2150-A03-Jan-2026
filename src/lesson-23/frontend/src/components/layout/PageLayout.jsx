//const theme = 'light';
import { useContext } from "react";
import { ThemeContext } from '../../context/ThemeContext';

export default function PageLayout({ header, children }) {
  const { theme } = useContext(ThemeContext);
  const common = 'border-b border-sky-600 px-6 py-4';
  const light = `bg-white text-black ${common}`;
  const dark = `bg-gray-900 text-white ${common}`;
  
  return (
    <div data-theme={theme} className="min-h-screen bg-base-200">
      <header className={ theme === 'dark' ? dark : light}>
        {header}
      </header>

      <main className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-6 py-6 md:grid-cols-3">
        {children}
      </main>
    </div>
  );
}