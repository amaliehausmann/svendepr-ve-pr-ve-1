import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Frontpage } from "./pages/Frontpage";
import { SingleNewsPage } from "./pages/SingleNewsPage";
import { Login } from "./pages/Login";
import { UserContextProvider } from "./context/userContext";
import { Lineup } from "./pages/Lineup";
import { MyProgram } from "./pages/MyProgram";
import { PracticalInfo } from "./pages/PracticalInfo";
import { Camps } from "./pages/Camps";
import { SingleCampPage } from "./pages/SingleCampPage";

function App() {
  return (
    <>
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Frontpage />}></Route>
            <Route path="/news/:id" element={<SingleNewsPage />}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/lineup" element={<Lineup/>}></Route>
            <Route path="/myprogram" element={<MyProgram/>}></Route>
            <Route path="/practicalinfo" element={<PracticalInfo/>}></Route>
            <Route path="/camps" element={<Camps/>}></Route>
            <Route path="/camps/:id" element={<SingleCampPage/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      </UserContextProvider>
    </>
  );
}

export default App;
