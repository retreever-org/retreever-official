import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/navbar/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Runtime from "./pages/Runtime";
import Security from "./pages/Security";
import GetStarted from "./pages/GetStarted";
import Github from "./pages/Github";
import Footer from "./components/Home/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-app-background text-text-title">
      <Router>
        <Layout />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/runtime" element={<Runtime />} />
            <Route path="/security" element={<Security />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/github" element={<Github />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};
export default App;
