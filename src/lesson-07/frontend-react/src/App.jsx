import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'; // Importing our custom React component
import Filters from './components/Filters';
import Results from './components/Results';
import Details from './components/Details';

// Instead of using classes for custom elements (like what we did with Vanilla JS Web Components), the modern React way is to use a function. The technical term for this is a Constructor Function.
function App() {
  const [count, setCount] = useState(0)

  // We are returning a JSX Expression. Every JSX expression
  // must have a SINGLE "tag" as the root.
  // The <></> is an Empty Tag and it's a "special" <Fragment>
  // that allows you to avoid putting an actual DOM element "wrapper"
  // into your page
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="bg-sky-500">Vite + React</h1>
      <Header tagLine="The best resource at NAIT for learning is Dan Gilleland" />
      <Filters></Filters>
      <Results></Results>
      <Details></Details>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
