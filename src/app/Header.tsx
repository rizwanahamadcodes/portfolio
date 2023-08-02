"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const Header = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="system">System</option>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
        </select>
    );
};

export default Header;
