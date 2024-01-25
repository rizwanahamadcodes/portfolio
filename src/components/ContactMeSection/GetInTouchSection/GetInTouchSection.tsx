import { IconType } from "react-icons";
import { BiLoaderAlt } from "react-icons/bi";
import { BsInstagram, BsMessenger } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import GetInTouch from "./GetInTouch";

type GetInTouchSectionProps = {};

export type GetInTouchItem = {
    label: string;
    linkLabel: string;
    url: string;
    icon: IconType;
};

const getInTouchItems: GetInTouchItem[] = [
    {
        label: "Mail me at:",
        linkLabel: "rizwanahamadcodes@gmail.com",
        url: "mailto:rizwanahamadcodes@gmail.com",
        icon: SiGmail,
    },
    {
        label: "Text me on Messenger:",
        linkLabel: "messenger.com/100047043491338",
        url: "https://m.me/100047043491338",
        icon: BsMessenger,
    },
    {
        label: "Mail me on Instagram:",
        linkLabel: "instagram.com/rizwan29972",
        url: "https://www.instagram.com/rizwan29972/",
        icon: BsInstagram,
    },
];

const GetInTouchSection = (props: GetInTouchSectionProps) => {
    const {} = props;

    return (
        <div className="flex flex-col gap-1 sm:inline-flex">
            {getInTouchItems.map((getInTouchItem) => {
                return (
                    <GetInTouch
                        key={getInTouchItem.url}
                        getInTouchItem={getInTouchItem}
                    />
                );
            })}
        </div>
    );
};

export default GetInTouchSection;
