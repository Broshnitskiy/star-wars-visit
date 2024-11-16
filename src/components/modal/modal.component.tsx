import { FC } from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Button,
} from "@headlessui/react";
import toast from "react-hot-toast";
import { IModalProps } from "./modal.types";

/**
 * Modal component for confirming actions.
 *
 * This component displays a modal dialog for confirming the addition of a film to favorites.
 * It uses Headless UI's Dialog for accessibility and TailwindCSS for styling.
 *
 * @param {IModalProps} props
 * @param {boolean} props.isOpen
 * @param {() => void} props.closeModal
 * @param {string} props.filmTitle
 *
 * @returns {JSX.Element}
 *
 * @author Roman Bro
 * @category Components
 */

export const Modal: FC<IModalProps> = ({ closeModal, isOpen, filmTitle }) => {
  return (
    <Dialog open={isOpen} onClose={closeModal}>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
        <div className="flex justify-center items-center min-h-screen">
          <DialogPanel className="bg-white p-6 rounded-lg max-w-lg mx-auto">
            <DialogTitle className="text-2xl font-semibold text-gray-800">
              Add to Favorites
            </DialogTitle>
            <Description className="mt-2 text-gray-600">
              Are you sure you want to add <strong>{filmTitle}</strong> to your
              favorites?
            </Description>
            <div className="mt-4 flex justify-end gap-4">
              <Button
                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                onClick={closeModal}
              >
                Cancel
              </Button>
              <Button
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
                onClick={() => {
                  closeModal();
                  toast.success(`${filmTitle} added to favorites!`);
                }}
              >
                Confirm
              </Button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
