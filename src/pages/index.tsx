import { Route, Routes } from "react-router-dom";
import Layout from "./_shared/Layout";
import Home from "./Home";
import Quiz from "./Quiz";
import Result from "./Result";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Route>
    </Routes>
  );
};

export default App;
