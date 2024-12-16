import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ComingSoon from "./component/ComingSoon";
import Header from "./component/Header/Header";
import Home from "./pages/Home";
import SignUP from "./pages/SignUP";

const Layout = () => {
  return (
    <main>
      {/* <Header /> */}
      <Outlet />
      {/* <Footer /> */}
    </main>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/signup", element: <SignUP /> },
      // { path: "*", element: <NotFound404 /> },
    ],
  },
  {
    children: [{ path: "/soon", element: <ComingSoon /> }],
  },
]);
function App() {
  return (
    // <>
    <RouterProvider router={router} />
    // </>
  );
}

export default App;
