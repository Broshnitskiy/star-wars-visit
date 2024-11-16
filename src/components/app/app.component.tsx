import { router } from "@/router";
import { FC } from "react";
import { RouterProvider } from "react-router-dom";

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
