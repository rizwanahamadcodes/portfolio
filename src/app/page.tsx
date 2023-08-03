import Header from "./Header";
import styles from "@/styles/main.module.scss";

export default function Home() {
    return (
        <>
            <Header />
            <h1 className={styles["heading"]}>Hi! i was styled by scss</h1>
        </>
    );
}
