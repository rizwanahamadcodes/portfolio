import { IconType } from "react-icons";

const pathConstants = {
    home: { label: "Home", path: "/" },
    technologies: { label: "Projects", path: "#technologies-section" },
    projects: { label: "Projects", path: "#projects-section" },
    about: { label: "About Me", path: "#about-me-section" },
    contact: { label: "Contact Me", path: "#contact-me-section" },
};
export type PathConstant = {
    label: string;
    path: string;
    icon?: IconType;
    activeIcon?: IconType;
};

export default pathConstants;
