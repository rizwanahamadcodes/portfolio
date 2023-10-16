import Container from '@/components/Container'
import Section, {
    SectionCategoryTitle,
    SectionSubtitle,
    SectionTitle,
} from '@/components/Section'
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
    },
    {
        id: 2,
        title: 'ReactJS',
        categoryId: 1,
        icon: DiReact,
        color: '#00d8ff',
    },
    {
        id: 3,
        title: 'Typescript',
        categoryId: 1,
        icon: SiTypescript,
        color: '#007acc',
    },
    {
        id: 4,
        title: 'Javascript',
        categoryId: 1,
        icon: DiJavascript,
        color: '#f7df1e',
    },
    {
        id: 5,
        title: 'CSS',
        categoryId: 2,
        icon: DiCss3,
        color: '#2965f1',
    },
    {
        id: 6,
        title: 'Sass',
        categoryId: 2,
        icon: DiSass,
        color: '#c69',
    },
    {
        id: 7,
        title: 'Tailwind',
        categoryId: 2,
        icon: SiTailwindcss,
        color: '#00b4b6',
    },
    {
        id: 8,
        title: 'Bootstrap',
        categoryId: 2,
        icon: SiBootstrap,
        color: '#8911fb',
    },
    {
        id: 9,
        title: 'HTML',
        categoryId: 3,
        icon: DiHtml5,
        color: '#e34f26',
    },
    {
        id: 10,
        title: 'Photoshop',
        categoryId: 4,
        icon: SiAdobephotoshop,
        color: '#100f27',
    },
    {
        id: 11,
        title: 'Illustrator',
        categoryId: 4,
        icon: SiAdobeillustrator,
        color: '#261300',
    },
    {
        id: 12,
        title: 'Figma',
        categoryId: 4,
        icon: CgFigma,
        color: '#0acf84',
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
    {
        id: 4,
        title: 'Design Tools',
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
export const TechCard: React.FC<TechCardProps> = (props) => {
    const { tech } = props
    const { id, icon: Icon, title, color } = tech

    return (
        <div
            key={id}
            className="rounded-full` flex items-center gap-4 active:scale-[0.98]"
        >
            <div
                style={{
                    background: color,
                }}
                className="flex items-center justify-center rounded-full bg-white p-2 dark:bg-gray-600"
            >
                <Icon size={30} className="text-white" />
            </div>
            <p>{tech.title}</p>
        </div>
    )
}

type TechCardGroupProps = {
    techCategory: (typeof techCategoriesList)[number]
}

const TechCardGroup: React.FC<TechCardGroupProps> = (props) => {
    const { techCategory } = props

    return (
        <div key={techCategory.id}>
            <SectionCategoryTitle className="mb-4">
                {techCategory.title}
            </SectionCategoryTitle>

            <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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
