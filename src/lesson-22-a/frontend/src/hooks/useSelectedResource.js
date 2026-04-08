// One of the things we have to consider when switching to SSR
// is that the web server will not have certain capabilities
// that the browser had. For example:
//  - window
//  - sessionStorage

import { useEffect, useRef, useState } from 'react';

const STORAGE_KEY = 'selectedResource';

export function useSelectedResource() {
  const [selectedResource, setSelectedResource] = useState(null); // We use a null initial state
  const hasLoadedFromStorage = useRef(false);

  useEffect(() => {
    // the code in this effect needs logic to behave differently on the web server than it does in the browser
    // 1) If we're running on the web server, just return/exit
    if (typeof window === 'undefined') {
      return;
    }

    // 2) Get the session data (if any)
    const stored = sessionStorage.getItem(STORAGE_KEY);
    //    If we don't have session data, then set our ref and exit/return
    if(!stored) {
      hasLoadedFromStorage.current = true;
      return;
    }

    // 3) We need to store/save data in the session state (browser-managed)
    try {
      setSelectedResource(JSON.parse(stored));
    } catch {
      sessionStorage.removeItem(STORAGE_KEY);
    } finally {
      hasLoadedFromStorage.current = true;
    }

  }, []);

  useEffect(() => {
    // If we are running on the web server or we don't have session data, then just exit
    if(typeof window === 'undefined' || !hasLoadedFromStorage.current) {
      return;
    }

    // Otherwise, process this as we normally would in the browser.
    if (selectedResource === null) {
      sessionStorage.removeItem(STORAGE_KEY);
      return;
    }

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(selectedResource));
  }, [selectedResource]);

  return [selectedResource, setSelectedResource];
}
