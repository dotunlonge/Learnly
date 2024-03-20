import React, { useState, useEffect } from 'react';

/**
 * A custom hook for checking the screen width.
 * @returns {boolean} - Indicates whether the screen width is considered large (>= 1024) or not.
 */
function useWindowSize() {
    const [isLargeScreen, setIsLargeScreen] = useState(false);
  
    useEffect(() => {
        /**
         * Updates the state based on the current screen size.
         * @returns {void}
         */
        function checkScreenSize() {
            setIsLargeScreen(window.innerWidth >= 1024);
        }
  
        // Initial check
        checkScreenSize();

        // Event listener for window resize
        window.addEventListener('resize', checkScreenSize);

        // Cleanup function to remove event listener
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
  
    return isLargeScreen;
}

export default useWindowSize;
