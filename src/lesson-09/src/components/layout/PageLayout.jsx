// ~/src/components/layout/PageLayout.jsx

// Using this component to manage/centralize
// the side-wide layout that I want every
// page to have.

// The header, left, middle, and right props
// are acting as "named slots" for the page.

export default function PageLayout({ header, left, middle, right }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="border-b bg-white px-6 py-4">
        {header}
      </header>

      <main className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-6 py-6 md:grid-cols-3">
        <aside>{left}</aside>
        <section className="md:col-span-2">{middle}</section>
        <aside>{right}</aside>
      </main>
    </div>
  );
}