import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import PageNotFound from "./pages/PageNotFound";
import CustomerRights from "./pages/CustomerRights";
import QavaninVaMoqararat from "./pages/QavaninVaMoqararat";

const router = createBrowserRouter(
  [
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "*",
          element: <PageNotFound />,
        },
        {
          path: "/قوانین-و-مقررات",
          element: <QavaninVaMoqararat />,
        },
        {
          path: "/customer-rights",
          element: <CustomerRights />,
        },
        {
          path: "/contact-us",
          element: <ContactUs />,
        },
        {
          path: "/about-us",
          element: <AboutUs />,
        },
      ],
    },
  ],
  { basename: "/sadrtellweb/" }, // Add this to match your repo name
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
