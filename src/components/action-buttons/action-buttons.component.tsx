import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "@headlessui/react";
import { IActionButtonsProps } from "./action-buttons.types";

export const ActionButtons: FC<IActionButtonsProps> = ({ openModal }) => {
  return (
    <div className="mt-8 flex justify-center gap-4">
      <Link
        to="/"
        className="inline-block bg-gray-800 text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-700"
      >
        Back to Films
      </Link>
      <Button
        className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-500"
        onClick={openModal}
      >
        Add to Favorites
      </Button>
    </div>
  );
};
