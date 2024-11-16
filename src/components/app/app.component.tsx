import { router } from "@/router";
import { FC } from "react";
import { RouterProvider } from "react-router-dom";

/**
 * Main App Component
 *
 * This component initializes the routing logic for the application.
 *
 * @returns {JSX.Element}
 */

export const App: FC = () => {
  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  );
};
