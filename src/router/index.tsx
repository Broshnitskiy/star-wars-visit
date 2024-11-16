import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import { Home } from "@/pages/home";
import { Layout } from "@/components/layout/layout.component";
import { filmsLoader } from "./loaders/films-loader";
import { ErrorBoundary } from "@/components/error-boundary";
import { Fallback } from "@/components/fallback";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <Home />,
        index: true,
        loader: filmsLoader,
        HydrateFallback: Fallback,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/film/:id",
        HydrateFallback: Fallback,
        errorElement: <ErrorBoundary />,
        async lazy() {
          const { FilmPage } = await import("../pages/film");
          return {
            Component: FilmPage,
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
  basename: "/star-wars-visit/",
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
