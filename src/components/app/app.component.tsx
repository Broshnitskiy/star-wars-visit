// import { useFilmByIdQuery } from "@/hooks/useFilmByIdQuery";
// import { useFilmsQuery } from "@/hooks/useFilmsQuery";
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
  //   const { loading, error, films } = useFilmsQuery();
  //   const { loading, error, film } = useFilmByIdQuery("ZmlsbXM6MQ==");
  //   console.log(film);
  //   if (loading) return null;
  //   if (error) return `Error! ${error}`;
  //   return (
  //     <>
  //       <p>Click on the Vite and React logos to learn more</p>
  //     </>
  //   );
};
