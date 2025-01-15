import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Frontpage } from "./pages/Frontpage";
import { SingleNewsPage } from "./pages/SingleNewsPage";
import { Login } from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Frontpage />}></Route>
            <Route path="/news/:id" element={<SingleNewsPage />}></Route>
            <Route path="/login" element={<Login/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
