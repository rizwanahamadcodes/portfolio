import ContactMe from './home/ContactMe'
import HeroSection from './home/HeroSection'
import ProjectsSection from './home/ProjectsSection'
import ServicesSection from './home/ServicesSection'
import TechnologiesSection from './home/TechnologiesSection'

export default function Home() {
    return (
        <>
            <HeroSection />
            <ServicesSection />
            <TechnologiesSection />
            <ProjectsSection />
            <ContactMe />
        </>
    )
}
