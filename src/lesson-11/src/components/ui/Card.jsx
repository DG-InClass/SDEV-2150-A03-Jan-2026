export default function Card({ title, children }) {
  return (
    <section className="h-full card bg-base-100">
      <header className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
        <h2 className="leading-relaxed font-bold text-sm text-primary">{title}</h2>
      </header>
      <div>
        {children}
      </div>
    </section>
  );
}