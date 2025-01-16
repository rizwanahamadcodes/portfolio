"use client";

import ContactMe from "@/components/ContactMeSection/ContactMe";
import HeroSection from "@/components/HeroSection/HeroSection";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import TechnologiesSection from "@/components/TechnologiesSection/TechnologiesSection";

export default function Home() {
    return (
        <>
            <HeroSection />
            <ServicesSection />
            <TechnologiesSection />
            <ProjectsSection />
            <ContactMe />
        </>
    );
}
