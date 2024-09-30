import style from "./Home.module.css";
import { Main } from "@/components/Main";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const Home = () => {
  return (
    <div className={style.Home}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
