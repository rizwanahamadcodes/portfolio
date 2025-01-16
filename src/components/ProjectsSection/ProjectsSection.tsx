import Image from "next/image";
import Section, {
    SectionCategoryTitle,
    SectionSubtitle,
    SectionTitle,
} from "@/components/Section/Section";
import Container from "@/components/Container/Container";
import { ButtonIcon, button } from "@/components/Button/Button";
import { TbWindowMaximize } from "react-icons/tb";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import clsx from "clsx";

const projects = [
    {
        projectTitle: "Public Forum",
        projectDesc:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, ipsa ducimus? Fugit porro perspiciatis adipisci neque tempore voluptatibus, id quibusdam, corporis reprehenderit nostrum pariatur ullam illo ad libero nisi explicabo.",
        projectImageSrc: "/img/wordanalytics.png",
    },

    {
        projectTitle: "E-commerce",
        projectDesc:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, ipsa ducimus? Fugit porro perspiciatis adipisci neque tempore voluptatibus, id quibusdam, corporis reprehenderit nostrum pariatur ullam illo ad libero nisi explicabo.",
        projectImageSrc: "/img/corpcomment.png",
    },

    {
        projectTitle: "Messaging",
        projectDesc:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, ipsa ducimus? Fugit porro perspiciatis adipisci neque tempore voluptatibus, id quibusdam, corporis reprehenderit nostrum pariatur ullam illo ad libero nisi explicabo.",
        projectImageSrc: "/img/rmtdev.png",
    },
];

const ProjectsSection = () => {
    return (
        <Section className="bg-gray-100 dark:bg-gray-900 border-b border-b-gray-200 dark:border-b-gray-800">
            <Container className="flex flex-col  items-center">
                <SectionTitle className="text-center" defaultBottomMargin>
                    Projects I&apos;ve worked on
                </SectionTitle>
                <SectionSubtitle className="text-center" defaultBottomMargin>
                    Every project featuring the usage of some of the most
                    important front end tools
                </SectionSubtitle>
                <div className="flex max-w-3xl flex-col gap-1">
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
    );
};

export default ProjectsSection;

type ProjectProps = {
    project: (typeof projects)[number];
    positionInParent: number;
};

const Project = (props: ProjectProps) => {
    const { project, positionInParent } = props;

    return (
        <div
            className={clsx(
                "group flex flex-col overflow-hidden rounded-1 bg-white p-0.75 shadow transition-all hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-750",
                positionInParent % 2 === 0
                    ? "sm:flex-row"
                    : "sm:flex-row-reverse"
            )}>
            <div className="p-1 sm:w-2/4">
                <SectionCategoryTitle>
                    {project.projectTitle}
                </SectionCategoryTitle>
                <p className="mb-0.5">{project.projectDesc}</p>
                <div className="flex flex-col gap-1 lg:flex-row">
                    <Link className={button()} href="/">
                        <ButtonIcon icon={TbWindowMaximize} />
                        Live Demo
                    </Link>
                    <Link
                        className={button({
                            variant: "outline",
                            colorScheme: "themed-gray",
                        })}
                        href="/">
                        <ButtonIcon icon={FaGithub} />
                        Code
                    </Link>
                </div>
            </div>
            <div className="relative sm:w-2/4">
                <div
                    className={clsx(
                        "h-18 transition-all sm:absolute sm:right-[15%] sm:top-[10%] sm:h-full sm:w-[130%]",
                        positionInParent % 2 === 0
                            ? "sm:left-[15%] sm:top-[10%] sm:group-hover:left-[10%] sm:group-hover:-rotate-6"
                            : " sm:group-hover:right-[10%] sm:group-hover:rotate-6"
                    )}>
                    <Image
                        src={project.projectImageSrc}
                        fill
                        alt=""
                        className="rounded object-cover sm:rounded-1 sm:object-left-top"
                    />
                </div>
            </div>
        </div>
    );
};
