import Section from '@/components/Section'
import { CgFigma } from 'react-icons/cg'
import { DiCss3, DiHtml5, DiJavascript, DiReact, DiSass } from 'react-icons/di'
import {
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiBootstrap,
    SiJavascript,
    SiNextdotjs,
    SiTailwindcss,
} from 'react-icons/si'

const techList = [
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
        id: 10,
        title: 'Bootstrap',
        categoryId: 2,
        icon: SiBootstrap,
        color: '#8911fb',
    },
    {
        id: 11,
        title: 'Sass',
        categoryId: 2,
        icon: DiSass,
        color: '#c69',
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
            subtitle="I have been programming for six years and these are the technologies i picked up along the way"
        >
            <div className="flex flex-col gap-8">
                {techCategoriesList.map((techCategory) => (
                    <div key={techCategory.id}>
                        <h5 className="mb-4 font-medium text-primary dark:text-primary">
                            {techCategory.title}
                        </h5>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                            {techList
                                .filter(
                                    (techItem) =>
                                        techItem.categoryId === techCategory.id
                                )
                                .map((tech) => {
                                    const { icon: Icon } = tech
                                    return (
                                        <div
                                            key={tech.id}
                                            className="flex cursor-pointer items-center gap-3 rounded-full border-[2px] border-transparent bg-gray-100 p-2 pr-4 hover:border-gray-300/60 hover:shadow active:scale-[0.98] dark:bg-gray-700 dark:hover:border-gray-900/60"
                                        >
                                            <div
                                                style={{
                                                    background: tech.color,
                                                }}
                                                className="flex items-center justify-center rounded-full bg-white p-2 dark:bg-gray-600"
                                            >
                                                <Icon
                                                    size={30}
                                                    className="text-white"
                                                />
                                            </div>
                                            <p>{tech.title}</p>
                                        </div>
                                    )
                                })}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    )
}

export default TechnologiesSection
