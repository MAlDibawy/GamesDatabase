import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import Home from "./Components/Home/Home";
import Category from "./Components/Category/Category";
import Error404 from "./Components/PageNotFound/Error404";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      {
        path: "/mmorpg",
        element: <Category key={"mmorpg"} category="mmorpg" />,
      },
      {
        path: "/shooter",
        element: <Category key={"shooter"} category="shooter" />,
      },
      {
        path: "/sailing",
        element: <Category key={"sailing"} category="sailing" />,
      },
      {
        path: "/permadeath",
        element: <Category key={"permadeath"} category="permadeath" />,
      },
      {
        path: "/superhero",
        element: <Category key={"superhero"} category="superhero" />,
      },
      { path: "/pixel", element: <Category key={"pixel"} category="pixel" /> },
      { path: "*", element: <Error404 /> },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      {/* <MainPage /> */}
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
