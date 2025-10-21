"use client";

import { useEffect, useState } from "react";
import Container from "@/components/Container/Container";

const FooterCopyright = () => {
    const [friendsString, setFriendsString] = useState("");

    useEffect(() => {
        const friendsName = ["Aditi", "Roshni"];
        const sortedFriendsName = friendsName.sort(() => Math.random() - 0.5);

        setFriendsString(sortedFriendsName.join(" and "));
    }, []);

    return (
        <div className="bg-gray-200 py-1 text-center dark:bg-gray-800 ">
            <Container>
                {`Made with love and feedback from my friends ${friendsString}`}
            </Container>
        </div>
    );
};

export default FooterCopyright;
