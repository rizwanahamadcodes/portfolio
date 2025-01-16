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
        projectTitle: "Image Editing App",
        projectDesc:
            "Feature rich image editor with additional capability to render images based on huge dataset, templates once created using the available fields can be used to generate multiples design with dynamic content",
        projectImageSrc: "/img/cardgen.jpg",
        githubLink: "https://github.com/rizwanahamadcodes/cardgen",
        liveDemoLink: "https://cardgen-seven.vercel.app/",
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
        projectTitle: "API integration",
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
                "group flex flex-col overflow-hidden rounded-1 bg-white p-0.75 shadow transition-all hover:shadow-md dark:bg-gray-800",
                positionInParent % 2 === 0
                    ? "sm:flex-row"
                    : "sm:flex-row-reverse"
            )}>
            <div className="p-1 sm:w-2/4">
                <Link href={project.liveDemoLink}>
                    <SectionCategoryTitle>
                        {project.projectTitle}
                    </SectionCategoryTitle>
                </Link>
                <p className="mb-0.5">{project.projectDesc}</p>
                <div className="flex flex-col gap-1 lg:flex-row">
                    <Link
                        className={button({ className: "!w-full" })}
                        href={project.liveDemoLink}>
                        <ButtonIcon icon={TbWindowMaximize} />
                        Live Demo
                    </Link>
                    <Link
                        className={button({
                            variant: "outline",
                            colorScheme: "themed-gray",
                            className: "!w-full",
                        })}
                        href={project.githubLink}>
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
                        className="rounded-0.25 object-cover sm:rounded-1 sm:object-left-top border-black/10 border"
                    />
                </div>
            </div>
        </div>
    );
};
