import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import App from "@/App";
import { client } from "@/api/apollo";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>
);