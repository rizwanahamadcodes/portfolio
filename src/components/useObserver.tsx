import { useEffect, useState } from "react";

type useObserverProps = React.MutableRefObject<HTMLElement | null>;

const useObserver = (elementRef: useObserverProps) => {
    const [touchingStatus, setTouchingStatus] = useState<{
        topTouchedTop: boolean;
        bottomTouchedTop: boolean;
    }>({
        topTouchedTop: true,
        bottomTouchedTop: false,
    });

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const intersectionObserverCallback: IntersectionObserverCallback = (
            entries,
            observer
        ) => {
            entries.forEach((entry) => {
                if (entry.intersectionRatio === 1) {
                    setTouchingStatus((prevTouchingStatus) => {
                        return {
                            ...prevTouchingStatus,
                            topTouchedTop: true,
                            bottomTouchedTop: false,
                        };
                    });
                } else if (entry.intersectionRatio === 0) {
                    setTouchingStatus((prevTouchingStatus) => {
                        return {
                            ...prevTouchingStatus,
                            bottomTouchedTop: true,
                            topTouchedTop: false,
                        };
                    });
                }
            });
        };

        const options: IntersectionObserverInit = {
            threshold: [0, 1],
            rootMargin: `0px 0px 0px 0px`,
        };
        const observer = new IntersectionObserver(
            intersectionObserverCallback,
            options
        );

        if (element) {
            observer.observe(element);
        }
        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [elementRef]);

    return touchingStatus;
};

export default useObserver;
