/**
 * Props for the Modal component.
 *
 * @property {boolean} isOpen - Indicates whether the modal is visible.
 * @property {() => void} closeModal - Function to close the modal dialog.
 * @property {string} filmTitle - Title of the film to be added to favorites.
 */

export interface IModalProps {
  closeModal: () => void;
  isOpen: boolean;
  filmTitle: string;
}
