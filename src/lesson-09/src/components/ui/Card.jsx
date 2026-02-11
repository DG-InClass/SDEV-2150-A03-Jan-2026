// ~/src/components/ui/Card.jsx

// This component is a Presentational Component
// whose purpose is to give the general/common
// styling that I would have for any "Card-like"
// content on my page.

export default function Card({ title, children}) {
    return <section className="h-full rounded border border-gray-200 bg-white shadow-sm">
        <header className="border-b border-gray-200 px-4 py-3">
            <h2 className="leading-relaxed font-bold text-sm text-gray-900">{title}</h2>
        </header>
        <div>
            {children}
        </div>
    </section>
}
