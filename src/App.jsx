import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Frontpage } from "./pages/Frontpage";
import { SingleNewsPage } from "./pages/SingleNewsPage";
import { Login } from "./pages/Login";
import { UserContextProvider } from "./context/userContext";
import { Lineup } from "./pages/Lineup";

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
          </Route>
        </Routes>
      </BrowserRouter>
      </UserContextProvider>
    </>
  );
}

export default App;
