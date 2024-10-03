import style from "./Home.module.css";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";

const Home = () => {
  return (
    <div className={style.Home}>
      <Header />
      <Main />
    </div>
  );
};

export default Home;
