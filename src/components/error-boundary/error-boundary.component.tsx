import { Button } from "@headlessui/react";
import { FC } from "react";
import { useRouteError } from "react-router-dom";

/**
 * ErrorBoundary Component
 *
 * A boundary to catch and display errors encountered during routing.
 *
 * @returns {JSX.Element}
 */

export const ErrorBoundary: FC = () => {
  const error = useRouteError() as Error;

  return (
    <div>
      <h1>Uh oh, something went terribly wrong 😩</h1>
      <pre>{error.message || JSON.stringify(error)}</pre>
      <Button onClick={() => (window.location.href = "/")}>
        Click here to reload the app
      </Button>
    </div>
  );
};
