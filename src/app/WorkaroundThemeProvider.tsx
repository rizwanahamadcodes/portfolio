"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

type WorkAroundThemeProviderProps = {
    children: React.ReactNode;
};

const WorkAroundThemeProvider = (props: WorkAroundThemeProviderProps) => {
    const [mounted, setMounted] = useState(false);
    const { children } = props;

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <>{children}</>;

    return (
        <ThemeProvider
            enableSystem={true}
            enableColorScheme={true}
            disableTransitionOnChange
            attribute="class">
            {children}
        </ThemeProvider>
    );
};

export default WorkAroundThemeProvider;
