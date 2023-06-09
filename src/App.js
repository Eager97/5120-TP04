import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticleCategory from "./pages/ArticleCategory";
import ArticleDetail from "./pages/ArticleDetail";
import Quiz from "./pages/Quiz";
import QuizDetail from "./pages/QuizDetail";
import DetectPage from "./pages/DetectPage";
import BackUp from "./pages/BackUp";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/article-category":
        title = "";
        metaDescription = "";
        break;
      case "/article-detail":
        title = "";
        metaDescription = "";
        break;
      case "/quiz":
        title = "";
        metaDescription = "";
        break;
      case "/quiz-detail":
        title = "";
        metaDescription = "";
        break;
      case "/detect-page":
        title = "";
        metaDescription = "";
        break;
      case "/back-up":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/article-category" element={<ArticleCategory />} />
      <Route path="/article-detail" element={<ArticleDetail />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/quiz-detail" element={<QuizDetail />} />
      <Route path="/detect-page" element={<DetectPage />} />
      <Route path="/back-up" element={<BackUp />} />
    </Routes>
  );
}
export default App;
