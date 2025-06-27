import { IconType } from "react-icons";

const pathConstants = {
    home: { label: "Home", path: "/" },
    projects: { label: "Projects", path: "/projects" },
    about: { label: "About Me", path: "/about-me" },
    contact: { label: "Contact Me", path: "/contact-me" },
};
export type PathConstant = {
    label: string;
    path: string;
    icon?: IconType;
    activeIcon?: IconType;
};

export default pathConstants;
