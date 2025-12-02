import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

/**
 * Custom hook that triggers a callback when the route changes.
 * Useful for forcing components to refresh or perform cleanup when navigating.
 * Returns a refresh key that changes when route changes.
 */
const useRefreshOnRouteChange = (callback?: () => void) => {
    const location = useLocation();
    const previousPathname = useRef(location.pathname);
    const [refreshKey, setRefreshKey] = useState(0);

    useEffect(() => {
        if (previousPathname.current !== location.pathname) {
            // Route has changed
            if (callback) {
                callback();
            }
            // Update refresh key to force re-render
            setRefreshKey(prev => prev + 1);
            previousPathname.current = location.pathname;
        }
    }, [location, callback]);

    return refreshKey;
};

export default useRefreshOnRouteChange;