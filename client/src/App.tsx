import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Genders from "./pages/gender/Genders";
import EditGender from "./pages/gender/EditGender";
import DeleteGender from "./pages/gender/DeleteGender";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Genders />,
  },
  {
    path: "/gender/edit",
    element: <EditGender />,
  },
  {
    path: "/gender/delete",
    element: <DeleteGender />,
  },
  {
    path: "*",
    element: <div>404 - Page Not Found</div>,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
