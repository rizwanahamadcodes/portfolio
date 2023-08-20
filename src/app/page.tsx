import Image from 'next/image'
import harry from '../../public/img/harry.jpg'
import Container from '@/components/Container'
import ThemedImage from '@/components/ThemedImage'
import heroImageLight from '../../public/img/hero_image_light.svg'
import heroImageDark from '../../public/img/hero_image_dark.svg'
import NewDrawer, {
    DrawerBody,
    DrawerFoot,
    DrawerHead,
} from '@/components/NewDrawer'

export default function Home() {
    return (
        <Container>
            <NewDrawer>
                <DrawerHead>I am the drawer head</DrawerHead>
                <DrawerBody>I am the drawer body</DrawerBody>
                <DrawerFoot>I am the drawer foot</DrawerFoot>
            </NewDrawer>
            <h1>This is the home page</h1>
            <p>I am a parapgraph</p>
            <ThemedImage
                darkImageSrc={heroImageDark}
                lightImageSrc={heroImageLight}
                alt="Hero image"
            />
        </Container>
    )
}
