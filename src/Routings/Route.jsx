import AddUser from "../component/AddUser";
import ClassListing from "../component/ClassListing";
import SectionListing from "../component/SectionListing";
import UpdateUser from "../component/UpdateUser";
import UserListing from "../component/UserListing";
import AddSection from "../component/AddSection";
import UpdateSection from "../component/UpdateSection";
import AddClass from "../component/AddClass";
import UpdateClass from "../component/UpdateClass";

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
  {
    path: "/class",
    element: <ClassListing />,
  },
  {
    path: "/class/add",
    element: <AddClass />,
  },
  {
    path: "/class/update/:id",
    element: <UpdateClass />,
  },
  {
    path: "/section",
    element: <SectionListing />,
  },
  {
    path: "/section/add",
    element: <AddSection />,
  },
  {
    path: "/section/update/:id",
    element: <UpdateSection />,
  },
];
