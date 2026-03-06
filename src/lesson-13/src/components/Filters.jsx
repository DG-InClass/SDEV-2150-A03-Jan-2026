import Card from './ui/Card';

/**
 * This component filters the results of resources.
 * @param {object} props The Props of our Filters component
 * @param {string} props.searchTerm The text to search for as a filter criteria
 * @param {function} props.onSearchChange The function to call when changing the searchTerm
 * @param {string[]} props.selecteCategories The array of categories to use for filtering
 * @param {function} props.onCategoryToggle The function to call when toggling a category
 * @param {boolean} props.openNowOnly A filter for resources that are only open right now
 * @param {function} props.onOpenNowChange The function to call when toggling the openNowOnly filter
 * @returns {JSX.Element}
 */
export default function Filters({searchTerm, onSearchChange, selectedCategories, onCategoryToggle, openNowOnly, onOpenNowChange}) {

  function toggleCategory(category) {
    onCategoryToggle((prev) => {
      if (prev.includes(category)) {
        return prev.filter((c) => c !== category);
      }

      return [...prev, category];
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if(!hasAtLeastOneFilter()) {
      alert('Please select at least one filter option.'); // TODO: Replace with component??
    } else {
      // Apply the filters
      console.log('Filters submitted');
    }
  }

  const hasAtLeastOneFilter = () => hasSearchTerm() || hasSelectedCategories() || openNowOnly;
  const hasSelectedCategories = () => selectedCategories?.length > 0;
  const hasSearchTerm = () => !!searchTerm.trim(); // An empty string is regarded as "falsey"
  //                           !\____ string ___/
  //                          !\____ boolean __/
  //                          \__ boolean ____/

  return (
    <Card title="Filters">
      <div className="space-y-4 p-4">
        <form onSubmit={handleSubmit} id="frm-filter" className="space-y-4">
          <div className="space-y-1">
            <label htmlFor="q" className="block text-sm font-medium text-gray-700">
              Search
            </label>
            <input
              id="q"
              type="text"
              placeholder="Try: tutoring, mental health, bursary"
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
              onChange={(e) => onSearchChange(e.target.value)}
              value={searchTerm}
            />
          </div>
          {/* <p className="text-sm text-base-content/70">
            Searching for: {searchTerm}
          </p> */}

          <hr className="border-gray-200" />

          <div className="space-y-2">
            <div className="text-sm font-semibold text-gray-800">Category</div>
            <div className="flex flex-wrap gap-2" aria-label="Category filters">
              {['All', 'Academic', 'Wellness', 'Financial', 'Tech'].map((label) => (
                <button
                  key={label}
                  type="button"
                  className={`${selectedCategories.includes(label) && 'bg-sky-600 text-white'} rounded border border-sky-600 px-3 py-1 text-xs font-semibold text-sky-700 hover:bg-sky-50 hover:text-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-200`}
                  onClick={() => toggleCategory(label)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <hr className="border-gray-200" />

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                id="openNow"
                className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-600 accent-sky-600"
                checked={openNowOnly}
                onChange={(e) => onOpenNowChange(e.target.checked)}
              />
              Open now
            </label>

            {/* Have students implement state for this checkbox */}
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                id="virtual"
                className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-600 accent-sky-600"
              />
              Virtual options
            </label>
          </div>

          <hr className="border-gray-200" />

          <div className="flex gap-2">
            <button
              type="button"
              className="rounded border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
              // First student exercise solution
              onClick={() => {
                onSearchChange('');
                onCategoryToggle([]);
                onOpenNowChange(false);
              }}
            >
              Reset
            </button>
            <button
              type="submit"
              className="rounded bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700"
            >
              Filter
            </button>
            {/* <p className="text-sm">
              Open now only: {openNowOnly ? 'Yes' : 'No'}
            </p> */}
          </div>
        </form>
      </div>
    </Card >
  );
}
