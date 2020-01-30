import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { ApolloProvider } from "react-apollo";
import client from "./client";

function Conatinar() {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
}

ReactDOM.render(<Conatinar />, document.getElementById("root"));
