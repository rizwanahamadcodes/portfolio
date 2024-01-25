"use client";
import { useRef } from "react";
import useObserver from "@/hooks/useObserver";
import Navbar from "@/components/Navbar/Navbar";

const NavbarWithObserver = () => {
    const navSubstituteRef = useRef<HTMLDivElement | null>(null);
    const viewportTouchingStatus = useObserver(navSubstituteRef);
    return (
        <>
            <Navbar viewportTouchingStatus={viewportTouchingStatus} />
            <div
                className="h-navHeight-large bg-transparent"
                ref={navSubstituteRef}></div>
        </>
    );
};

export default NavbarWithObserver;
