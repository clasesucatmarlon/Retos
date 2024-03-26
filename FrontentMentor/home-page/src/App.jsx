import Header from "./components/header/Header";
import MainArticle from "./components/main/MainArticle";
import NewContainer from "./components/news/NewContainer";

const App = () => {

  return (
    <main className="px-5 pt-6">
      <Header />
      <div className="sm:flex sm:gap-7">
        <MainArticle />
        <NewContainer />
      </div>
    </main>
  )
}

export default App;
