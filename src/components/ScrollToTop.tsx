import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll to top of page when route changes
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

        // Dispatch a custom event to notify components that route has changed
        window.dispatchEvent(new CustomEvent('routeChanged', { detail: { pathname } }));
    }, [pathname]);

    return null;
};

export default ScrollToTop;