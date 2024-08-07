import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import image1 from "./images/top-view-spiral-notebook-red-marker-woman-hand-have-nice-day-written-yellow-note-paper-blue.jpg";
import "react-toastify/dist/ReactToastify.css";
import Home from "./modules/LandingPage/Home";
import Navbar from "./modules/NavbarComp/Navbar";
import AddNotesForm from "./modules/FormsComp/AddNotesForm";
import Add_NotesPort from "./modules/LandingPage/Add_NotesPort";
import LoginForm from "./modules/LoginFormPages/LoginForm";
function App() {
  return (
    <Router>
      <div
        className="flex flex-col w-full h-full overflow-hidden bg-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image1})`,
        }}
      >
        <Navbar />
        <div className="h-full mt-24 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/addNote" element={<Add_NotesPort />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
