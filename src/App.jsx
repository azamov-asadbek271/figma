// react-router-dom
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
// mainlayout
import MainLayouts from "./layouts/MainLayouts";
// pages
import { Contact, FinanceTools, Home, Programs, Register,Login } from "./pages";
// toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/programs",
          element: <Programs />,
        },
        {
          path: "/financeTools",
          element: <FinanceTools />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
