import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";

/**
 * Layout Component
 *
 * This component defines the overall layout structure of the application.
 * It includes the `Header` at the top, a `Footer` at the bottom, and renders
 * the child routes via `Outlet` in the main content area.
 *
 * @returns {JSX.Element}
 *
 * @author Roman Bro
 * @category Components
 */

export const Layout: FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-6">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};
