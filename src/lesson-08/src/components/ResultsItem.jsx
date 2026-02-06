// ~/src/components/ResultsItem.jsx

// React components are designed to have a single parameter, commonly called "props".
// It's an object that will hold the info sent into the component.
// You can choose either to just call it props or you can provide a destructured
// object if you want to identify specific property names for the props.
// For example, if I needed a property called "title", I could have my
// parameter be:        ResultsItem({title}) {

// My parameter list has a single parameter - an object that I am destructuring (un-packing)
// I am going to add another property of my "props" - children
export default function ResultsItem({title, category, summary, location, children}) {

    return <>
        <li
            key={title}
            className="w-full text-left px-4 py-3 text-gray-900 hover:bg-gray-50"
        >
            <div className="flex items-start justify-between gap-3">
                <h2 className="text-sm font-semibold">{title}</h2>
                <small className="text-xs text-gray-500">{category}</small>
            </div>
            <p className="mt-1 text-xs text-gray-500">{summary}</p>
            <small className="mt-1 block text-xs text-gray-500">
                {location}
            </small>
        </li>
    </>
}