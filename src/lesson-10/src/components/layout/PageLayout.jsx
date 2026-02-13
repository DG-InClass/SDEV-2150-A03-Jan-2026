export default function PageLayout({ header, children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="border-b border-sky-600 bg-white px-6 py-4">
        {header}
      </header>

      <main className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-6 py-6 md:grid-cols-3">
        {children}
      </main>
    </div>
  );
}