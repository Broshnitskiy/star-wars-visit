import { FC } from "react";
import { Link } from "react-router-dom";

/**
 * Header Component
 *
 * This component represents the top navigation bar of the application. It includes:
 * - A logo that links to the homepage.
 * - Navigation links for "Home", "About", and "Contact" pages.
 *
 * The header uses Tailwind CSS for styling.
 *
 * @returns {JSX.Element}
 *
 * @author Roman Bro
 * @category Components
 */

export const Header: FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-blue-300">
            MyLogo
          </Link>
        </div>

        {/* Navigation */}
        <nav className="space-x-4">
          <Link to="/" className="hover:text-blue-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-300">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-300">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};
