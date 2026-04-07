import { useState } from 'react';
import { useLoaderData } from 'react-router';
import { useSelectedResource } from '../hooks/useSelectedResource';

import Filters from '../components/Filters';
import Results from '../components/Results';
import Details from '../components/Details';

export default function ResourceDirectoryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [openNowOnly, setOpenNowOnly] = useState(false);
  // const [selectedResource, setSelectedResource] = useState(null);
  const [selectedResource, setSelectedResource] = useSelectedResource();
  const [virtualOnly, setVirtualOnly] = useState(false);

  const { resources } = useLoaderData();

  return (
    <>
      <aside className="md:col-span-3 lg:col-span-1">
        <Filters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCategories={selectedCategories}
          onCategoryToggle={setSelectedCategories}
          openNowOnly={openNowOnly}
          onOpenNowChange={setOpenNowOnly}
          virtualOnly={virtualOnly}
          onVirtualOnlyChange={setVirtualOnly}
        />
      </aside>
      <section className="md:col-span-2 lg:col-span-1">
        <Results
          resources={resources}
          selectedResource={selectedResource}
          onSelectResource={setSelectedResource}
          searchTerm={searchTerm}
          selectedCategories={selectedCategories}
          openNowOnly={openNowOnly}
          virtualOnly={virtualOnly}
        />
      </section>
      <aside className="md:col-span-1 lg:col-span-1">
        {selectedResource ? (
          <Details resource={selectedResource} />
        ) : (
          <div className="text-sm text-base-content/70">
            Select a resource to view details.
          </div>
        )}
      </aside>
    </>
  );
}