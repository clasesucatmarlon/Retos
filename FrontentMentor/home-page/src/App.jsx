import Header from "./components/header/Header";
import MainArticle from "./components/main/MainArticle";
import NewContainer from "./components/news/NewContainer";
import { ArticlesContainer } from "./components/articles/ArticlesContainer";

const App = () => {

  return (
    <main className="px-5 pt-6">
      <Header />
      <div className="sm:flex sm:gap-7 mb-9">
        <MainArticle />
        <NewContainer />
      </div>
      <ArticlesContainer />
    </main>
  )
}

export default App;
