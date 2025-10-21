import Container from "@/components/Container/Container";
import Section, {
    SectionSubtitle,
    SectionTitle,
    SectionCategoryTitle,
} from "@/components/Section/Section";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { MdDevices } from "react-icons/md";
import { GiResize } from "react-icons/gi";
import React from "react";
import { IconType } from "react-icons";

type Service = {
    title: string;
    icon: IconType;
    description: string;
};

const services: Service[] = [
    {
        title: "Fast",
        icon: AiOutlineThunderbolt,
        description:
            "Made with best practise in mind, the websites perform as well as they are supposed to",
    },
    {
        title: "Responsive",
        icon: MdDevices,
        description:
            "Websites that are fully functional and look good on mobiles, laptops and desktops",
    },
    {
        title: "Scalable",
        icon: GiResize,
        description:
            "Built with modular components such that new features can easily be added when necessary",
    },
];

const ServicesSection = () => {
    return (
        <Section className="bg-gray-100 dark:bg-gray-900 border-b border-b-gray-200 dark:border-b-gray-800">
            <Container className="flex flex-col items-center">
                <SectionTitle defaultBottomMargin>I make websites</SectionTitle>
                <SectionSubtitle defaultBottomMargin>that are:</SectionSubtitle>
            </Container>
            <Container className="grid grid-cols-1 gap-1 xs:grid-cols-2 md:grid-cols-3">
                {services.map((service) => {
                    return (
                        <ServiceCard key={service.title} service={service} />
                    );
                })}
            </Container>
        </Section>
    );
};

type ServiceCardProps = {
    service: Service;
};

const ServiceCard = (props: ServiceCardProps) => {
    const { service } = props;
    const { title, icon: Icon, description } = service;

    return (
        <div className="flex basis-full flex-col items-center rounded-0.5 bg-white p-1.5 shadow-sm dark:bg-gray-800 ">
            <div className="mb-0.25 flex items-center justify-center rounded-full bg-primary bg-linear-to-t from-primary to-primary-400 text-gray-100 h-4.75 w-4.75">
                <Icon className="text-1.875 text-white" />
            </div>
            <SectionCategoryTitle className="mb-1">
                {title}
            </SectionCategoryTitle>
            <p>{description}</p>
        </div>
    );
};

export default ServicesSection;
