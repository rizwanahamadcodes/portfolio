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

// "Feature rich image editor with additional capability to render images based on huge dataset, templates once created using the available fields can be used to generate multiples design with dynamic content",

const projects = [
    {
        projectTitle: "Online Code Runner",
        projectDesc:
            "Code compiler and runner with modern code editor functionalities and a minimal ui to for easy testing of code snippets, with suport for all major programming languages and varying color modes",
        projectImageSrc: "/img/code_runner_large.jpg",
        githubLink: "https://github.com/rizwanahamadcodes/code-runner",
        liveDemoLink: "https://code-runner-omega.vercel.app/",
    },
    {
        projectTitle: "Image Editing App",
        projectDesc:
            "Simple and to the point image editor, with most necessary features for a pleasant and distraction free image editing experience",
        projectImageSrc: "/img/cardgen.jpg",
        githubLink: "https://github.com/rizwanahamadcodes/image-editor",
        liveDemoLink: "https://image-editor-eight-omega.vercel.app",
    },

    {
        projectTitle: "E-commerce",
        projectDesc:
            "E-commerce web store, with search, categories and functional cart system, utilizing redux library for state management",
        projectImageSrc: "/img/fruits-commerce.jpg",
        githubLink: "https://github.com/rizwanahamadcodes/fruits-ecommerce",
        liveDemoLink: "https://fruits-ecommerce-taupe.vercel.app/",
    },

    {
        projectTitle: "Games Discovery App",
        projectDesc:
            "Intergration of a custom frotend to an external API, featuring multiple filters, loading skeletons, light and dark mode, all with chakra ui",
        projectImageSrc: "/img/games.jpg",
        githubLink: "https://github.com/rizwanahamadcodes/game-discovery",
        liveDemoLink: "https://game-discovery-gamma.vercel.app/",
    },
];

type ProjectSectionProps = {
    className?: string;
};

const ProjectsSection = (props: ProjectSectionProps) => {
    const { className } = props;

    return (
        <Section
            className={clsx(
                "bg-gray-100 dark:bg-gray-900 border-b border-b-gray-200 dark:border-b-gray-800",
                className
            )}>
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
                "group relative flex flex-col overflow-hidden rounded-1 bg-white p-0.75 shadow transition-all hover:shadow-md dark:bg-gray-800",
                positionInParent % 2 === 0
                    ? "sm:flex-row"
                    : "sm:flex-row-reverse"
            )}>
            <div className="p-1 sm:w-2/4">
                <Link
                    href={project.liveDemoLink}
                    target="_blank"
                    className="before:inset-0 before:content-[''] before:absolute before:z-10"
                    rel="noopener noreferrer">
                    <SectionCategoryTitle>
                        {project.projectTitle}
                    </SectionCategoryTitle>
                </Link>
                <p className="mb-0.5">{project.projectDesc}</p>
                <div className="flex flex-col gap-1 lg:flex-row">
                    <Link
                        className={button({ className: "!w-full" })}
                        href={project.liveDemoLink}
                        target="_blank"
                        rel="noopener noreferrer">
                        <ButtonIcon icon={TbWindowMaximize} />
                        Live Demo
                    </Link>
                    <Link
                        className={button({
                            variant: "outline",
                            colorScheme: "themed-gray",
                            className: "!w-full z-20",
                        })}
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer">
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
                        className="rounded-0.25 object-cover sm:rounded-1 object-left-top border-black/10 border"
                    />
                </div>
            </div>
        </div>
    );
};
