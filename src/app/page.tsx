import Footer from '@/components/Footer'
import ContactMe from './home/ContactMe'
import HeroSection from './home/HeroSection'
import ProjectsSection from './home/ProjectsSection'
import TechnologiesSection from './home/TechnologiesSection'

export default function Home() {
    return (
        <>
            <HeroSection />
            <TechnologiesSection />
            <ContactMe />
            <ProjectsSection />
        </>
    )
}
