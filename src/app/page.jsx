import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import Categorylist from "@/components/categoryList/CategoryList";
import CardList from "@/components/CardList/CardList";
import Menu from "@/components/Menu/Menu";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <Categorylist />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
