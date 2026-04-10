// src/components/Header.jsx
import { NavLink } from 'react-router';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Header({ tagline }) {
  const { theme, toggleTheme } = useContext(ThemeContext); // We unpack whatever "stuff" is available in our context provider

  return (
    <div className="flex flex-wrap items-end justify-between gap-2">
      <div>
        <h1 className="text-xl font-semibold text-sky-600">NAIT Resource Directory</h1>
        <p className="text-sm text-gray-500">
          {tagline ? tagline : 'Find student support services, labs, and campus resources.'}
        </p>
      </div>
      <nav className="flex gap-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `btn btn-sm cursor-pointer btn-ghost text-xs ${isActive ? 'text-sky-700' : 'hover:text-sky-700'}`
          }
        >
          Directory
        </NavLink>

        <NavLink
          to="/admin"
          className={({ isActive }) =>
            `btn btn-sm cursor-pointer btn-ghost text-xs ${isActive ? 'text-sky-700' : 'hover:text-sky-700'}`
          }
        >
          Admin
        </NavLink>
        <button onClick={toggleTheme}
          className="bn btn-sm cursor-pointer btn-ghost text-xs text-sky-700">
          Current theme: {theme}
        </button>
      </nav>
    </div>
  );
}
