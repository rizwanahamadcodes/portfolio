import Container from "@/components/Container/Container";
import Section, { SectionCategoryTitle, SectionSubtitle, SectionTitle } from "@/components/Section/Section";
import Image from "next/image";
import { DiCss3, DiHtml5, DiJavascript, DiReact, DiSass } from "react-icons/di";
import { SiBootstrap, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

const techList = [
    {
        id: 1,
        title: "NextJS",
        categoryId: 1,
        icon: SiNextdotjs,
        color: "#000",
        imgUrl: "/img/technology/next-js-icon-seeklogo.com.svg",
    },
    {
        id: 2,
        title: "ReactJS",
        categoryId: 1,
        icon: DiReact,
        color: "#00d8ff",
        imgUrl: "/img/technology/react-seeklogo.com.svg",
    },
    {
        id: 3,
        title: "Typescript",
        categoryId: 1,
        icon: SiTypescript,
        color: "#007acc",
        imgUrl: "/img/technology/typescript-seeklogo.com.svg",
    },
    {
        id: 4,
        title: "Javascript",
        categoryId: 1,
        icon: DiJavascript,
        color: "#f7df1e",
        imgUrl: "/img/technology/javascript-js-seeklogo.com.svg",
    },
    {
        id: 5,
        title: "CSS",
        categoryId: 2,
        icon: DiCss3,
        color: "#2965f1",
        imgUrl: "/img/technology/css-3-seeklogo.com.svg",
    },
    {
        id: 6,
        title: "Sass",
        categoryId: 2,
        icon: DiSass,
        color: "#c69",
        imgUrl: "/img/technology/sass-seeklogo.com.svg",
    },
    {
        id: 7,
        title: "Tailwind",
        categoryId: 2,
        icon: SiTailwindcss,
        color: "#00b4b6",
        imgUrl: "/img/technology/tailwind-css-seeklogo.com.svg",
    },
    {
        id: 8,
        title: "Bootstrap",
        categoryId: 2,
        icon: SiBootstrap,
        color: "#8911fb",
        imgUrl: "/img/technology/bootstrap-5-seeklogo.com.svg",
    },
    {
        id: 9,
        title: "HTML",
        categoryId: 3,
        icon: DiHtml5,
        color: "#e34f26",
        imgUrl: "/img/technology/html5-without-wordmark-color.svg",
    },
];

const techCategoriesList = [
    {
        id: 1,
        title: "JS Libraries and Frameworks",
    },
    {
        id: 2,
        title: "Styling",
    },
    {
        id: 3,
        title: "Markup",
    },
];

const TechnologiesSection = () => {
    return (
        <Section className="border-b border-b-gray-200 dark:border-b-gray-800 bg-gray-100 dark:bg-gray-900" id="technologiesSection">
            <Container>
                <SectionTitle defaultBottomMargin>Technologies</SectionTitle>
                <SectionSubtitle defaultBottomMargin>Tools and tech i use</SectionSubtitle>

                <div className="flex flex-col gap-2">
                    {techCategoriesList.map((techCategory) => (
                        <TechCardGroup key={techCategory.id} techCategory={techCategory} />
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default TechnologiesSection;

type TechCardProps = {
    tech: (typeof techList)[number];
};
export const TechCard = (props: TechCardProps) => {
    const { tech } = props;
    const { id, icon: Icon, title, color, imgUrl } = tech;

    return (
        <div className="flex  items-center gap-1 rounded-0.5 bg-white p-1 shadow dark:bg-gray-800">
            <Image src={imgUrl} alt={title + " image"} width={40} height={40} className="h-2.5 w-2.5 object-contain" />
            <p>{title}</p>
        </div>
    );
};

type TechCardGroupProps = {
    techCategory: (typeof techCategoriesList)[number];
};

const TechCardGroup = (props: TechCardGroupProps) => {
    const { techCategory } = props;

    return (
        <div key={techCategory.id}>
            <SectionCategoryTitle defaultBottomMargin>{techCategory.title}</SectionCategoryTitle>

            <div className="grid grid-cols-1 gap-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {techList
                    .filter((techItem) => techItem.categoryId === techCategory.id)
                    .map((tech) => {
                        return <TechCard key={tech.id} tech={tech} />;
                    })}
            </div>
        </div>
    );
};
