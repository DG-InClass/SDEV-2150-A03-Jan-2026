// ~/src/hooks/useResources.js
// This is a custom hook that encapsulate both useEffect and useState
import { useEffect, useState } from "react";

const API_BASE_URL = 'http://localhost:3000';

export function useResources() {
    // The actual external data we'll be "managing"
    const [resources, setResources] = useState([]);
    // We want to know if the data is loaded or not
    const [isLoading, setIsLoading] = useState(true);
    // We should track any errors that happen with our API calls
    const [error, setError] = useState(null);

    async function fetchResources(signal) {
        setIsLoading(true);
        setError(null);
        
        try {
            // The code inside the try might blow up (throw an exception) 💣
            const res = await fetch(`${API_BASE_URL}/resources`, { signal });
            // Notice the { signal } included in our fetch call. This is provided
            // in case our component should go through the "unmounting" stage.

            if(!res.ok) {
                throw new Error(`Request failed: ${res.status} ${res.statusText}`);
            }

            const data = await res.json();
            setResources(data); // 😁 Success if we made it this far through the try block
        } catch (err) {
            // The catch block is mean to handle the exception { 💥 }
            if (err.name !== 'AbortError') { // 'AbortError' is associated with the AbortController signal
                // something else went wrong
                setError(err);
            }
        } finally {
            // The finally block will always run (giving us a chance to do cleanup) 🧹
            setIsLoading(false); // We're done with our attempt to call the API endpoints
        }
    }

    useEffect(() => {
        const controller = new AbortController(); // TODO: Look up AbortController on MDN
        fetchResources(controller.signal);

        return () => {
            controller.abort();
        }
    }, []); // This effect will run on Mount only

    function refetch() {
        const controller = new AbortController();
        fetchResources(controller.signal);
    }

    return { 
        resources,  // Our current state of the resource data
        isLoading,  // A boolean state variable for whether or not we are finished with the fetch
        error,      // Any errors that might have happened during the fetch
        refetch     // A function to "refetch" the data
    }
}
