import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PathsRoutes } from "./Routings/Route";
import { Toaster } from "react-hot-toast";
import TopHeader from "./component/Header/Topheader";
function App() {
  return (
    <>
      <BrowserRouter>
      <TopHeader/>
      <Toaster/>
        <Routes>
          {PathsRoutes.map((x, idex) => (
            <Route key={idex} path={x.path} element={x.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
