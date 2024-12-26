import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ComingSoon from "./component/ComingSoon";
import Header from "./component/Header/Header";
import Home from "./pages/Home";
import SignUP from "./pages/SignUP";
import { useContext, useEffect } from "react";
import { LanguageContext } from "./context/Language";
import Footer from "./component/Footer/Footer";
import NotFound404 from "./component/NotFound404";
import ModalName from "./component/ModalName";

const Layout = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/:name", element: <Home /> },

      { path: "*", element: <NotFound404 /> },
    ],
  },
  {
    children: [{ path: "/soon", element: <ComingSoon /> }],
  },
]);
function App() {
  const { localization, Right } = useContext(LanguageContext);
  useEffect(() => {
    window.document.dir = Right ? "rtl" : "ltr";
    document.title = localization.appInfo.title;
  }, [Right]);
  return (
    // <>
    <RouterProvider router={router} />
    // </>
  );
}

export default App;
