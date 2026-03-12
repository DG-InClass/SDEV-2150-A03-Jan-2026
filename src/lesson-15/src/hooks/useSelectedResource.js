// src/hooks/useSelectedResource.js

import { useState } from 'react';

const STORAGE_KEY =  'selectedResource';

/**
 * Returns a stateful value and a function to update the state in the browser's `sessionStorage`.
 * 
 * See {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage} for more information on what `sessionStorage` is and how to use it.
 * @returns {[*,function]} State stored in the browser's sessionStorage.
 */
export function useSelectedResource() {
    /* How we are working with `useState()` inside our custom hook:
       We are sending in a function as the "initial state" because we
       want to give the effect of "Lazy Initialization". This means that
       the function runs only on the intial render for our component.
       This allows us to:
       - Read from `sessionStorage` once
       - Initialize state corrected (based on whatever is in session storage)
       - Avoid re-reading that storage on every render
    */
    const [selectedResource, setSelectedResource] = useState(() => {
        const stored = sessionStorage.getItem(STORAGE_KEY);

        if (stored) {
            try {
                return JSON.parse(stored);
            } catch {
                return null;
            }
        }
        return null;
    });

    // custom logic for updating the session storage
    function updateSelectedResource(resource) {
        setSelectedResource(resource);

        if (resource === null) {
            sessionStorage.removeItem(STORAGE_KEY);
        } else {
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify(resource));
        }
    }

    return [selectedResource, updateSelectedResource];
}

