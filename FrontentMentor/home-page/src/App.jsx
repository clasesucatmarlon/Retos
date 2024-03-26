import Header from "./components/header/Header";
import MainArticle from "./components/main/MainArticle";
import NewContainer from "./components/news/NewContainer";
import { ArticlesContainer } from "./components/articles/ArticlesContainer";

const App = () => {

  return (
    <main className="px-7 lg:px-[3rem] pt-10 lg:pt-[3rem]">
      <Header />
      <div className="lg:flex lg:gap-7 mb-9">
        <MainArticle />
        <NewContainer />
      </div>
      <ArticlesContainer />
    </main>
  )
}

export default App;
