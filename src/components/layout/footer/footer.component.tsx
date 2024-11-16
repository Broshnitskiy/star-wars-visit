import { FC } from "react";
import { Link } from "react-router-dom";

/**
 * Footer Component
 *
 * This component represents the footer section of the application. It includes:
 * - A copyright message.
 * - Links to "Privacy Policy" and "Terms of Service" pages.
 *
 * The footer is styled using Tailwind CSS, providing a responsive design
 * that adjusts the layout for different screen sizes.
 *
 * @returns {JSX.Element}
 *
 * @author Roman Bro
 * @category Components
 */

export const Footer: FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2024 MyWebsite. All rights reserved.</p>
        <div className="mt-2 md:mt-0 space-x-4">
          <Link to="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-white">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};
