// ~/src/components/Header.jsx

// Our components in React expect a SINGLE parameter (at most).
// This is an object and is ofter referred to as the "Props"
// for our custom components. "Props" is short for "properties",
// and we can express them using destructuring syntax thereby
// giving names for the specific properties we want to have.
// Props are used to pass information into our component
export default function Header({ tagLine }) {
  // The JSX below is using Tailwind CSS utility classes for the styling.
  // Notice that in our JSX, when we apply the CSS class names, we use an
  // attribute called `className` instead of `class` for our markup. The
  // reason for this is because (in JavaScript) the word `class` is a
  // JavaScript Keyword.
  return (
    <header className="mb-4">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <h1 className="text-xl font-semibold text-sky-600">NAIT Resource Directory</h1>
          <p className="text-sm text-gray-500">
            {
                tagLine ? tagLine : "Find student support services, labs, and campus resources."
            }
          </p>
        </div>
      </div>
    </header>
  );
}
