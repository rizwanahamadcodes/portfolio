'use client'

import Button from '@/components/Button'
import Container from '@/components/Container'
import SpanWrapperWithRef from '@/components/SpanWrapperWithRef'
import React, { useEffect, useRef, useState } from 'react'

const Page = () => {
    const ref = useRef<HTMLSpanElement | null>(null)
    const [hitTheMid, setHitTheMid] = useState<boolean>()
    const [prevScroll, setPrevScroll] = useState<number>(0)

    useEffect(() => {
        const buildThresholdList = () => {
            let threshold = [0]
            const steps = Math.floor(document.body.offsetHeight / 10)

            for (let i = 1.0; i <= steps; i++) {
                let ratio = i / steps
                threshold.push(ratio)
            }

            return threshold
        }

        const callback: IntersectionObserverCallback = (entries, observer) => {
            console.log(window.scrollY)
        }

        const options: IntersectionObserverInit = {
            threshold: buildThresholdList(),
            rootMargin: '0px 0px -100% 0px',
        }

        const observer = new IntersectionObserver(callback, options)

        if (ref.current) {
            observer.observe(document.body)
        }
        return () => {
            observer.unobserve(document.body)
        }
    }, [])

    return (
        <Container optionalStyles="flex flex-col items-center">
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius,
                culpa. Quae, molestiae consectetur voluptas atque saepe eveniet
                placeat fuga quia a suscipit sapiente quaerat dolor dolore unde
                non consequuntur aperiam, maxime nobis? Nostrum, error nesciunt!
                Minus eos corrupti laboriosam at perspiciatis dolore, cumque
                consequuntur aut quam repellat, harum, eius dolorum esse non
                provident enim sint nesciunt veniam! Dignissimos eveniet
                incidunt minima, fugiat facere impedit repellendus iure aperiam
                cumque voluptatem. Magni, iusto velit. Officia nesciunt,
                sapiente itaque voluptatem recusandae soluta ad voluptatum amet
                deleniti, facere incidunt quaerat obcaecati vel numquam tenetur
                sed ut aliquid inventore alias vero fugit maiores! A saepe
                doloremque nam molestiae adipisci expedita cumque recusandae
                ratione dolor illum, maiores dolores sunt molestias enim natus
                dicta aliquid. Quis vel consequatur magnam eos. Reiciendis alias
                dignissimos ullam quia, cupiditate, corrupti quis itaque quidem
                totam obcaecati repellendus, cum porro iste minima nulla dolorum
                sint deserunt voluptatem pariatur laboriosam! Totam culpa quis,
                quibusdam, asperiores animi minus assumenda et numquam porro
                eaque similique accusamus voluptatum, nisi in optio ex libero
                incidunt nam earum itaque reiciendis. Animi, consequatur aut,
                nostrum perspiciatis, hic explicabo modi soluta dolores fugit
                facere accusantium! Fugiat, quia. Ipsa ullam molestiae sed id
                qui quis ipsum! Expedita placeat sint, reiciendis impedit ad
                alias ipsam ea excepturi molestiae praesentium corporis
                necessitatibus. Nostrum quaerat optio odio. Ut, a, velit quia
                ducimus rem eius aliquam molestiae corporis error in inventore
                non. Doloribus culpa consectetur ipsa odio repellendus vel, fuga
                consequatur cupiditate harum exercitationem commodi placeat
                aperiam corporis ea natus? Enim, quos atque maxime itaque nam
                quidem autem dolores necessitatibus sequi dolor nihil illum,
                nesciunt quam, dolore nulla. Sed laudantium consequatur quidem.
                Voluptas delectus iste earum, nam sit minus non nisi
                perspiciatis unde beatae. Hic saepe eligendi dolorem eaque.
                Deleniti suscipit facere, qui rem ut, esse aliquam magni ea
                molestiae ex nulla illum ipsum sit.
            </p>
            <SpanWrapperWithRef
                className={`bg-primary/20 ${
                    hitTheMid ? 'inline-block w-full' : ''
                }`}
                ref={ref}
            >
                <Button colorScheme={hitTheMid ? 'primary' : 'secondary'}>
                    Hello
                </Button>
            </SpanWrapperWithRef>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                soluta hic explicabo. Blanditiis ullam temporibus iusto
                aspernatur enim nulla cumque culpa aliquid sit, eligendi
                mollitia quae voluptatem non doloremque atque pariatur provident
                quibusdam. Corporis nisi doloremque necessitatibus consequuntur,
                ex possimus velit atque rerum, quisquam libero ipsam ratione!
                Corrupti at repudiandae molestiae soluta, animi libero in
                officia deleniti optio porro minima. Quas, tempore. Molestias
                harum obcaecati laudantium necessitatibus quaerat et itaque sit
                architecto tenetur ab excepturi nisi officia facilis ullam
                beatae, numquam nobis fugiat eligendi repudiandae ipsam illo ex
                sed! Nihil omnis mollitia eos ipsum, corrupti ea sunt,
                accusantium officia dolorum eum commodi rem vero nobis maiores
                perferendis maxime? Ipsam id veniam unde dolorem, aspernatur
                corporis? Impedit enim labore facilis ipsa odio repellendus
                animi perferendis itaque! Quibusdam minima iure necessitatibus
                ut omnis expedita quod ex harum sunt quam quis optio esse
                adipisci accusamus explicabo qui officiis quia, cumque corporis
                voluptatum, voluptas commodi vitae aspernatur. Cupiditate
                commodi natus velit facilis.
            </p>
        </Container>
    )
}

export default Page
