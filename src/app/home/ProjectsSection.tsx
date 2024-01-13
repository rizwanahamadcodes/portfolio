import Section, {
    SectionCategoryTitle,
    SectionSubtitle,
    SectionTitle,
} from '@/components/Section'
import Image from 'next/image'
import Button, { ButtonIcon, NextJsLinkButton } from '@/components/Button'
import { FaGithub } from 'react-icons/fa'
import { TbWindowMaximize } from 'react-icons/tb'
import cn from '@/components/utils/cn'
import Container from '@/components/Container'

const projects = [
    {
        projectTitle: 'Public Forum',
        projectDesc:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, ipsa ducimus? Fugit porro perspiciatis adipisci neque tempore voluptatibus, id quibusdam, corporis reprehenderit nostrum pariatur ullam illo ad libero nisi explicabo.',
        projectImageSrc: '/img/wordanalytics.png',
    },

    {
        projectTitle: 'E-commerce',
        projectDesc:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, ipsa ducimus? Fugit porro perspiciatis adipisci neque tempore voluptatibus, id quibusdam, corporis reprehenderit nostrum pariatur ullam illo ad libero nisi explicabo.',
        projectImageSrc: '/img/corpcomment.png',
    },

    {
        projectTitle: 'Messaging',
        projectDesc:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, ipsa ducimus? Fugit porro perspiciatis adipisci neque tempore voluptatibus, id quibusdam, corporis reprehenderit nostrum pariatur ullam illo ad libero nisi explicabo.',
        projectImageSrc: '/img/rmtdev.png',
    },
]

const ProjectsSection = () => {
    return (
        <Section className="bg-gray-200 dark:bg-gray-800">
            <Container className="flex flex-col  items-center">
                <SectionTitle className="text-center" defaultBottomMargin>
                    Projects I have worked on
                </SectionTitle>
                <SectionSubtitle className="text-center" defaultBottomMargin>
                    Every project featuring the usage of some of the most
                    important front end tools
                </SectionSubtitle>
                <div className="flex max-w-3xl flex-col gap-4">
                    {projects.map((project, index) => (
                        <Project
                            project={project}
                            positionInParent={index}
                            key={index}
                        />
                    ))}
                </div>
            </Container>
        </Section>
    )
}

type ProjectProps = {
    project: (typeof projects)[number]
    positionInParent: number
}

const Project = (props: ProjectProps) => {
    const { project, positionInParent } = props

    return (
        <div
            className={cn(
                'group flex flex-col overflow-hidden rounded-2xl bg-gray-100 p-3 shadow-soft transition-all hover:bg-gray-50 hover:shadow dark:bg-gray-700 dark:hover:bg-gray-750  sm:flex-row-reverse',
                positionInParent % 2 === 0 && 'sm:flex-row'
            )}
        >
            <div className="p-4 sm:w-2/4">
                <SectionCategoryTitle defaultBottomMargin>
                    {project.projectTitle}
                </SectionCategoryTitle>
                <p className="mb-2">{project.projectDesc}</p>
                <div className="flex flex-col gap-4 lg:flex-row">
                    <NextJsLinkButton
                        btnType="solid"
                        colorScheme={'primary'}
                        href="/"
                    >
                        <ButtonIcon icon={TbWindowMaximize} />
                        Live Demo
                    </NextJsLinkButton>
                    <NextJsLinkButton
                        btnType="outline"
                        colorScheme={'gray'}
                        href="/"
                    >
                        <ButtonIcon icon={FaGithub} />
                        Code
                    </NextJsLinkButton>
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
                        className="rounded object-cover sm:rounded-2xl sm:object-left-top"
                    />
                </div>
            </div>
        </div>
    )
}

export default ProjectsSection
