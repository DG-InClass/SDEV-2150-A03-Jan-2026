const API_BASE_URL = 'http://localhost:3000';

// API Helper functions for data creation and updates
export async function createResource(payload) {
  const res = await fetch(`${API_BASE_URL}/resources`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Could not create resource: ${res.status}`);
  }

  return res.json();
}

export async function updateResource(resourceId, payload) {
  const res = await fetch(`${API_BASE_URL}/resources/${resourceId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Could not update resource: ${res.status}`);
  }

  return res.json();
}

// API Helper functions for data fetching
export async function fetchResources() {
  const res = await fetch(`${API_BASE_URL}/resources`);

  if (!res.ok) {
    throw new Error(`Could not load resources: ${res.status}`);
  }

  return res.json();
}

export async function fetchResourceById(resourceId) {
  const res = await fetch(`${API_BASE_URL}/resources/${resourceId}`);

  if (!res.ok) {
    throw new Error(`Could not load resource: ${res.status}`);
  }

  return res.json();
}
