import { NavLink, useNavigate, useParams } from 'react-router';
import {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import Card from '../components/ui/Card';
import ResourceForm from '../components/ResourceForm';
import { createResource, fetchResourceById, fetchResources, updateResource } from '../api/resources';

export default function AdminPage() {
  const { resourceId } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    data: resources = [],
    isLoading: isLoadingResources,
    isError: isResourcesError,
    error: resourcesError,
  } = useQuery({
    queryKey: ['resources'],
    queryFn: fetchResources,
  });

  const {
    data: selectedResource,
    isLoading: isLoadingSelectedResource,
    isError: isSelectedResourceError,
    error: selectedResourceError,
  } = useQuery({
    queryKey: ['resource', resourceId],
    queryFn: () => fetchResourceById(resourceId),
    enabled: Boolean(resourceId),
  });

  const saveResourceMutation = useMutation({
    mutationFn: ({ payload, resourceId: currentResourceId }) => {
      return currentResourceId
        ? updateResource(currentResourceId, payload)
        : createResource(payload);
    },
    onSuccess: async (savedResource) => {
      await queryClient.invalidateQueries({ queryKey: ['resources'] });
      await queryClient.invalidateQueries({ queryKey: ['resource', savedResource.id] });
      navigate(`/admin/${savedResource.id}`);
    },
  });

  const isSubmitting = saveResourceMutation.isPending;

  const initialFormData = selectedResource
    ? {
      title: selectedResource.title,
      category: selectedResource.category,
      summary: selectedResource.summary,
      location: selectedResource.location,
      hours: selectedResource.hours,
      contact: selectedResource.contact,
      virtual: selectedResource.virtual,
      openNow: selectedResource.openNow,
    }
    : {
      title: '',
      category: '',
      summary: '',
      location: '',
      hours: '',
      contact: '',
      virtual: false,
      openNow: false,
    };

  function handleSubmitResource(formData) {
    saveResourceMutation.mutate({
      payload: formData,
      resourceId,
    });
  }

  if (isLoadingResources) {
    return <p>Loading resources...</p>;
  }

  if (isResourcesError) {
    return <p>Error loading resources: {resourcesError.message}</p>;
  }

  if (resourceId && isLoadingSelectedResource) {
    return <p>Loading selected resource...</p>;
  }

  if (resourceId && isSelectedResourceError) {
    return <p>Error loading selected resource: {selectedResourceError.message}</p>;
  }

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold">Admin</h1>
        <p className="text-sm text-base-content/70">
          Manage student resources.
        </p>
      </div>

      <section className="md:col-span-3 lg:col-span-3">
        <Card title="Resource Form">
          <div className="card-body">
            {saveResourceMutation.isError && (
              <p className="text-sm text-red-600">
                Error saving resource: {saveResourceMutation.error.message}
              </p>
            )}

            <ResourceForm
              key={resourceId ?? 'new'}
              initialData={initialFormData}
              isEditing={Boolean(resourceId)}
              isSubmitting={isSubmitting}
              onSubmit={handleSubmitResource}
            />
          </div>
        </Card>
      </section>

      <section className="md:col-span-3 lg:col-span-3">
        <Card title="Current Resources">
          <div className="card-body">
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.id}>
                  <NavLink
                    to={`/admin/${resource.id}`}
                    className={({ isActive }) =>
                      `block rounded border p-3 ${isActive ? 'border-sky-500 bg-sky-50' : 'border-gray-200'}`
                    }
                  >
                    <p className="font-semibold">{resource.title}</p>
                    <p className="text-sm text-base-content/70">{resource.category}</p>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </section>
    </>
  );
}