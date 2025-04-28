// react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayouts from "./layouts/MainLayouts";
import { Contact, FinanceTools, Home, Programs } from "./pages";

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
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
