import styles from "../styles/main.module.scss";
import Header from "./Header";

export default function Home() {
    return (
        <>
            <Header />
            <h1 className={styles["hi-there"]}>Hi! i was styled by scss</h1>
        </>
    );
}
