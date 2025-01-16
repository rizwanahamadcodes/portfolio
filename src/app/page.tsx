import Image from 'next/image'
import harry from '../../public/img/harry.jpg'
import Container from '@/components/Container'
import ThemedImage from '@/components/ThemedImage'
import heroImageLight from '../../public/img/hero_image_light.svg'
import heroImageDark from '../../public/img/hero_image_dark.svg'

export default function Home() {
    return (
        <Container>
            <h1>This is the home page</h1>
            <ThemedImage
                darkImageSrc={heroImageDark}
                lightImageSrc={heroImageLight}
                alt="Hero image"
            />
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Perspiciatis hic vero in modi quidem nobis enim repellendus
                facilis vitae laboriosam. Accusamus eligendi consectetur
                consequuntur deleniti autem aliquam officia dolor mollitia.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius,
                sed. Consequuntur cupiditate veniam, fuga earum beatae hic
                magnam nesciunt corporis laborum quisquam. Quia optio, tenetur
                animi delectus nobis deleniti provident? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Rerum tempore sed eos
                doloremque, magnam natus assumenda. Recusandae doloremque
                deleniti suscipit vel quae obcaecati natus, consectetur labore
                ex tempora corrupti veritatis?
            </p>
        </Container>
    )
}
