import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home } from "@/pages/home";
import { Layout } from "@/components/layout/layout.component";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <Home />,
        index: true,
        loader: () => ({ message: "Hello Data Router!" }),
      },
      {
        path: "film/:filmId",
        async lazy() {
          const { Film } = await import("../pages/film");
          return {
            // loader: dashboardMessagesLoader,
            Component: Film,
          };
        },
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}
