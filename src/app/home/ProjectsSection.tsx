import Section, { SectionCategoryTitle } from '@/components/Section'
import Image from 'next/image'
import Button from '@/components/Button'
import { FaGithub } from 'react-icons/fa'
import { TbWindowMaximize } from 'react-icons/tb'
import cn from '@/components/utils/cn'

const projects = [
    {
        projectTitle: 'public forum',
        projectDesc:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, ipsa ducimus? Fugit porro perspiciatis adipisci neque tempore voluptatibus, id quibusdam, corporis reprehenderit nostrum pariatur ullam illo ad libero nisi explicabo.',
        projectImageSrc: '/img/wordanalytics.png',
    },

    {
        projectTitle: 'e-commerce',
        projectDesc:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, ipsa ducimus? Fugit porro perspiciatis adipisci neque tempore voluptatibus, id quibusdam, corporis reprehenderit nostrum pariatur ullam illo ad libero nisi explicabo.',
        projectImageSrc: '/img/corpcomment.png',
    },

    {
        projectTitle: 'messaging',
        projectDesc:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, ipsa ducimus? Fugit porro perspiciatis adipisci neque tempore voluptatibus, id quibusdam, corporis reprehenderit nostrum pariatur ullam illo ad libero nisi explicabo.',
        projectImageSrc: '/img/rmtdev.png',
    },
]

const ProjectsSection = () => {
    return (
        <Section
            sectionClassName="bg-gray-200 dark:bg-gray-800"
            containerClassName="flex flex-col items-center"
            title="Projects i've worked on"
            subtitle="Every project featuring the usage of some of the most important front end tools"
        >
            <div className="flex max-w-3xl flex-col gap-8">
                {projects.map((project, index) => (
                    <Project
                        project={project}
                        positionInParent={index}
                        key={index}
                    />
                ))}
            </div>
        </Section>
    )
}

type ProjectProps = {
    project: (typeof projects)[number]
    positionInParent: number
}

const Project: React.FC<ProjectProps> = (props) => {
    const { project, positionInParent } = props

    return (
        <div
            className={cn(
                'group flex flex-col overflow-hidden rounded-xl bg-gray-100 p-4 hover:bg-gray-50 hover:shadow dark:bg-gray-700 dark:hover:bg-gray-600 sm:flex-row-reverse',
                positionInParent % 2 === 0 && 'sm:flex-row'
            )}
        >
            <div className="p-4 sm:w-2/4">
                <SectionCategoryTitle className="uppercase">
                    {project.projectTitle}
                </SectionCategoryTitle>
                <p className="mb-2">{project.projectDesc}</p>
                <div className="flex flex-col gap-4 lg:flex-row">
                    <Button
                        btnType="outline"
                        rightIcon={FaGithub}
                        colorScheme={'gray'}
                    >
                        Code
                    </Button>
                    <Button
                        rightIcon={TbWindowMaximize}
                        btnType="outline"
                        colorScheme={'gray'}
                    >
                        Live Demo
                    </Button>
                </div>
            </div>
            <div className="relative sm:w-2/4">
                <div
                    className={cn(
                        'h-72 transition-all sm:absolute sm:right-[15%] sm:top-[10%] sm:h-full sm:w-[130%] sm:group-hover:right-[10%] sm:group-hover:rotate-6',
                        positionInParent % 2 === 0 &&
                            'sm:left-[15%] sm:top-[10%] sm:group-hover:left-[10%] sm:group-hover:-rotate-6'
                    )}
                >
                    <Image
                        src={project.projectImageSrc}
                        fill
                        alt=""
                        className="rounded-lg object-cover sm:object-left-top"
                    />
                </div>
            </div>
        </div>
    )
}

export default ProjectsSection
