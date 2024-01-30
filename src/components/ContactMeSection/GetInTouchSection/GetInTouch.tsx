import { IconType } from "react-icons";
import { GetInTouchItem } from "@/components/ContactMeSection/GetInTouchSection/GetInTouchSection";

type GetInTouchProps = {
    getInTouchItem: GetInTouchItem;
};

const GetInTouch = (props: GetInTouchProps) => {
    const { getInTouchItem } = props;
    const { icon: Icon, label, linkLabel, url } = getInTouchItem;

    return (
        <a href={url}>
            <div className="inline-flex  w-full items-center gap-1 rounded-full bg-white p-0.5 pr-1.5 shadow hover:shadow-md transition-all active:scale-[0.98] dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-850">
                <div className="flex min-h-2.875 min-w-2.875 items-center justify-center rounded-full bg-primary bg-gradient-to-t from-primary to-primary-400">
                    <Icon size={26} className={"text-white"} />
                </div>
                <div className="flex flex-col min-w-0">
                    <p className="leading-1.25 text-gray-900 dark:text-gray-100">
                        {label}
                    </p>
                    <p className="leading-1.25 whitespace-nowrap overflow-hidden overflow-ellipsis min-w-0">
                        {linkLabel}
                    </p>
                </div>
            </div>
        </a>
    );
};
export default GetInTouch;
