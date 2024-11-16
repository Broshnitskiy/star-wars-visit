import { FC } from "react";

/**
 * Fallback Component
 *
 * A simple component to display a loading message during asynchronous operations.
 *
 * @returns {JSX.Element}
 */

export const Fallback: FC = () => {
  return <p className="text-center text-xl text-gray-600">Loading ...</p>;
};
