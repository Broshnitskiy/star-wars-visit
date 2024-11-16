import { useFilmByIdQuery } from "@/hooks/useFilmByIdQuery";
import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { FilmCard } from "@/components/film-card";
import { ActionButtons } from "@/components/action-buttons";
import { Modal } from "@/components/modal";

export const FilmPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, error, film } = useFilmByIdQuery(id || "");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  if (loading)
    return <p className="text-center text-xl text-gray-600">Loading...</p>;

  if (error)
    return (
      <p className="text-center text-xl text-red-600">Error! {error.message}</p>
    );

  if (!film)
    return <p className="text-center text-xl text-gray-600">Film not found!</p>;

  const closeModal = (): void => setIsOpen(false);
  const openModal = (): void => setIsOpen(true);

  return (
    <section className="container mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800">{film.title}</h1>
        <p className="text-xl text-gray-500">Episode {film.episodeID}</p>
      </div>

      <FilmCard film={film} />
      <ActionButtons openModal={openModal} />
      <Modal closeModal={closeModal} isOpen={isOpen} filmTitle={film.title} />
    </section>
  );
};
