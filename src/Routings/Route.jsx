import AddUser from "../component/AddUser";
import UpdateUser from "../component/UpdateUser";
import UserListing from "../component/UserListing";

export const PathsRoutes = [
  
  {
    path: "/",
    element: <UserListing />,
  },
  {
    path: "/user/add",
    element: <AddUser />,
  },
  {
    path: "/user/update/:id",
    element: <UpdateUser />,
  },
];
