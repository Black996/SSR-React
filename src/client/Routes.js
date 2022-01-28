import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";
import App from "./App";
import NotFoundPage from "./pages/NotFoundPage";
import AdminsListPage from "./pages/AdminsListPage";

const routes = [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: "/",
        exact: true,
      },
      {
        ...AdminsListPage,
        path: "/admins",
        exact: true,
      },
      {
        ...UsersListPage,
        path: "/users",
        exact: true,
      },
      {
        ...NotFoundPage,
      },
    ],
  },
];

export default routes;
