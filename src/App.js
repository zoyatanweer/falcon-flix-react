import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Homepage } from "./pages/Homepage/Homepage";
import { Explore } from "./pages/Explore/Explore";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Footer } from "./components/Footer/Footer";
import { Login } from "./pages/Login/Login";
import { Signup } from "./pages/SignUp/SignUp";
import { Liked } from "./pages/Liked/Liked";
import { WatchLater } from "./pages/WatchLater/WatchLater";
import { History } from "./pages/History/History";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/history" element={<History />} />

        {/* <Route path="/playlist" element={<Playlist />} /> */}
        <Route path="/watchLater" element={<WatchLater />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
