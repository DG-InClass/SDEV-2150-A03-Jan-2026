export default function Card({ title, children }) {
  return (
    <section className="h-full card card-border bg-base-100">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {children}
      </div>
    </section>
  );
}