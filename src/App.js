import { Routes, Route } from "react-router-dom";
import ArticlePage from "./Pages/ArticlePage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/article" element={<ArticlePage />} />
    </Routes>
  );
}

export default App;
