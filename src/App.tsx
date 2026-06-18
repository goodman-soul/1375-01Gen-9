import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Learning from "@/pages/Learning";
import Performances from "@/pages/Performances";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-paper text-ink">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/performances" element={<Performances />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
