import Container from '@/components/Container'
import Section, {
    SectionCategoryTitle,
    SectionSubtitle,
    SectionTitle,
} from '@/components/Section'
import Image from 'next/image'
import { CgFigma } from 'react-icons/cg'
import { DiCss3, DiHtml5, DiJavascript, DiReact, DiSass } from 'react-icons/di'
import {
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiBootstrap,
    SiNextdotjs,
    SiTailwindcss,
    SiTypescript,
} from 'react-icons/si'

const techList = [
    {
        id: 1,
        title: 'NextJS',
        categoryId: 1,
        icon: SiNextdotjs,
        color: '#000',
        imgUrl: '/img/technology/next-js-icon-seeklogo.com.svg',
    },
    {
        id: 2,
        title: 'ReactJS',
        categoryId: 1,
        icon: DiReact,
        color: '#00d8ff',
        imgUrl: '/img/technology/react-seeklogo.com.svg',
    },
    {
        id: 3,
        title: 'Typescript',
        categoryId: 1,
        icon: SiTypescript,
        color: '#007acc',
        imgUrl: '/img/technology/typescript-seeklogo.com.svg',
    },
    {
        id: 4,
        title: 'Javascript',
        categoryId: 1,
        icon: DiJavascript,
        color: '#f7df1e',
        imgUrl: '/img/technology/javascript-js-seeklogo.com.svg',
    },
    {
        id: 5,
        title: 'CSS',
        categoryId: 2,
        icon: DiCss3,
        color: '#2965f1',
        imgUrl: '/img/technology/css-3-seeklogo.com.svg',
    },
    {
        id: 6,
        title: 'Sass',
        categoryId: 2,
        icon: DiSass,
        color: '#c69',
        imgUrl: '/img/technology/sass-seeklogo.com.svg',
    },
    {
        id: 7,
        title: 'Tailwind',
        categoryId: 2,
        icon: SiTailwindcss,
        color: '#00b4b6',
        imgUrl: '/img/technology/tailwind-css-seeklogo.com.svg',
    },
    {
        id: 8,
        title: 'Bootstrap',
        categoryId: 2,
        icon: SiBootstrap,
        color: '#8911fb',
        imgUrl: '/img/technology/bootstrap-5-seeklogo.com.svg',
    },
    {
        id: 9,
        title: 'HTML',
        categoryId: 3,
        icon: DiHtml5,
        color: '#e34f26',
        imgUrl: '/img/technology/html5-without-wordmark-color.svg',
    },
]

const techCategoriesList = [
    {
        id: 1,
        title: 'JS Libraries and Frameworks',
    },
    {
        id: 2,
        title: 'Styling',
    },
    {
        id: 3,
        title: 'Markup',
    },
]

const TechnologiesSection = () => {
    return (
        <Section>
            <Container>
                <SectionTitle className="text-center">
                    Technologies I am familiar with
                </SectionTitle>
                <SectionSubtitle className="text-center" defaultBottomMargin>
                    Some of the languages and technologies i picked up along the
                    way{' '}
                </SectionSubtitle>

                <div className="flex flex-col gap-8">
                    {techCategoriesList.map((techCategory) => (
                        <TechCardGroup
                            key={techCategory.id}
                            techCategory={techCategory}
                        />
                    ))}
                </div>
            </Container>
        </Section>
    )
}

export default TechnologiesSection

type TechCardProps = {
    tech: (typeof techList)[number]
}
export const TechCard = (props: TechCardProps) => {
    const { tech } = props
    const { id, icon: Icon, title, color, imgUrl } = tech

    return (
        <div className="flex items-center gap-4 rounded-md p-4 shadow-soft">
            <Image src={imgUrl} alt={title + ' image'} width={40} height={40} />
            <p>{title}</p>
        </div>
    )
}

type TechCardGroupProps = {
    techCategory: (typeof techCategoriesList)[number]
}

const TechCardGroup = (props: TechCardGroupProps) => {
    const { techCategory } = props

    return (
        <div key={techCategory.id}>
            <SectionCategoryTitle className="mb-4">
                {techCategory.title}
            </SectionCategoryTitle>

            <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {techList
                    .filter(
                        (techItem) => techItem.categoryId === techCategory.id
                    )
                    .map((tech) => {
                        return <TechCard key={tech.id} tech={tech} />
                    })}
            </div>
        </div>
    )
}
