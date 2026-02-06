// src/components/Results.jsx
import { resources } from '../data/resources';
import ResultsItem from './ResultsItem';

export default function Results() {
  return (
    <section className="h-full mb-4">
      <div className="h-full rounded border border-gray-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
          <strong className="text-sm text-gray-900">Results</strong>
          <span className="rounded-full bg-gray-200 px-2.5 py-0.5 text-xs font-semibold text-gray-700">
            4
          </span>
        </div>

        <ul className="divide-y divide-gray-200">
          {/* INFO: Could just copy/paste individual buttons, but this is more maintainable */}
          {
          resources.map((item) => (
            <ResultsItem 
              key={item.id}
              title={item.title}
              category={item.category}
              summary={item.summary}
              location={item.location}
            >
              {/* children: optional badge content */}
              {
                item.openNow && (
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-800">
                    Open now
                  </span>
                )
              }
            </ResultsItem>
          ))
          }
        </ul>
      </div>
    </section>
  );
}