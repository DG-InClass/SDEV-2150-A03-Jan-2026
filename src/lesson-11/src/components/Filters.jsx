import Card from './ui/Card';

// src/components/Filters.jsx
export default function Filters() {
  return (
    <Card title="Filters">
      <div className="space-y-4 p-4">
        <form id="frm-filter" className="space-y-4">
          <div className="space-y-1">
            <label htmlFor="q" className="block text-sm font-medium text-gray-700">
              Search
            </label>
            <input
              id="q"
              type="text"
              placeholder="Try: tutoring, mental health, bursary"
              className="w-full input"
            />
          </div>

          <hr className="border-gray-200" />

          <div className="space-y-2">
            <div className="text-sm font-semibold text-gray-800">Category</div>
            <div className="flex flex-wrap gap-2" aria-label="Category filters">
              {['All', 'Academic', 'Wellness', 'Financial', 'Tech'].map((label) => (
                <button
                  key={label}
                  type="button"
                  className="btn btn-outline"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <hr className="border-gray-200" />

          <div className="space-x-4">
            <label className="label">
              <input
                type="checkbox"
                id="openNow"
                className="checkbox"
              />
              Open now
            </label>

            <label className="label">
              <input
                type="checkbox"
                id="virtual"
                className="checkbox"
              />
              Virtual options
            </label>
          </div>

          <hr className="border-gray-200" />

          <div className="flex gap-2">
            <button
              type="button"
              className="btn btn-soft btn-secondary"
            >
              Reset
            </button>
            <button
              type="submit"
              className="btn btn-primary"
            >
              Filter
            </button>
          </div>
        </form>
      </div>
    </Card >
  );
}
