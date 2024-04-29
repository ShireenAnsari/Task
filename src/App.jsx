import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PathsRoutes } from "./Routings/Route";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <BrowserRouter>
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
