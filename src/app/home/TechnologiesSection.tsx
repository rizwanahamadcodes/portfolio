import Section, { SectionCategoryTitle } from '@/components/Section'
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
        id: 12,
        title: 'Typescript',
        categoryId: 1,
        icon: SiTypescript,
        color: '#007acc',
    },
    {
        id: 1,
        title: 'Javascript',
        categoryId: 1,
        icon: DiJavascript,
        color: '#f7df1e',
    },
    {
        id: 2,
        title: 'CSS',
        categoryId: 1,
        icon: DiCss3,
        color: '#2965f1',
    },
    {
        id: 3,
        title: 'HTML',
        categoryId: 1,
        icon: DiHtml5,
        color: '#e34f26',
    },
    {
        id: 4,
        title: 'NextJS',
        categoryId: 2,
        icon: SiNextdotjs,
        color: '#000',
    },
    {
        id: 5,
        title: 'ReactJS',
        categoryId: 2,
        icon: DiReact,
        color: '#00d8ff',
    },
    {
        id: 6,
        title: 'Tailwind',
        categoryId: 2,
        icon: SiTailwindcss,
        color: '#00b4b6',
    },
    {
        id: 7,
        title: 'Photoshop',
        categoryId: 3,
        icon: SiAdobephotoshop,
        color: '#100f27',
    },
    {
        id: 8,
        title: 'Illustrator',
        categoryId: 3,
        icon: SiAdobeillustrator,
        color: '#261300',
    },
    {
        id: 9,
        title: 'Figma',
        categoryId: 3,
        icon: CgFigma,
        color: '#0acf84',
    },
    {
        id: 11,
        title: 'Sass',
        categoryId: 2,
        icon: DiSass,
        color: '#c69',
    },
    {
        id: 10,
        title: 'Bootstrap',
        categoryId: 2,
        icon: SiBootstrap,
        color: '#8911fb',
    },
]
const techCategoriesList = [
    {
        id: 2,
        title: 'Frameworks and Libraries',
    },
    {
        id: 1,
        title: 'Programming Languages and Markup',
    },
    {
        id: 3,
        title: 'Design Tools',
    },
]

const TechnologiesSection = () => {
    return (
        <Section
            sectionClassName="bg-gray-200 dark:bg-gray-800"
            containerClassName=""
            title="Technologies I'm familiar with"
            subtitle="Some of the languages and technologies i picked up along the way "
        >
            <div className="flex flex-col gap-8">
                {techCategoriesList.map((techCategory) => (
                    <TechCardGroup
                        key={techCategory.id}
                        techCategory={techCategory}
                    />
                ))}
            </div>
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
            className="flex cursor-pointer items-center gap-2 rounded-full bg-gray-100 p-2 pr-4  hover:shadow hover:shadow-gray-900/30 active:scale-[0.98] dark:bg-gray-700 dark:hover:shadow-gray-900/70"
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

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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
