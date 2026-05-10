import { AboutMe } from "@/features/home/components/AboutMe";
import { MyProject } from "@/features/home/components/MyProject";
import { Article } from "@/features/home/components/Article";

export const Home = () => {
  return (
    <>
      <div className="home">
        <AboutMe />
        <MyProject />
        <Article />
      </div>
    </>
  );
};
