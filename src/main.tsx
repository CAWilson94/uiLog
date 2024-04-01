import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:9090/graphql",
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query MyQuery($id: ID!) {
        WorkItemLogById(id: $id) {
          id
          date
          department
          actualLengthOfTime
          author
          estimatedLengthOfTime
          workType
        }
      }
    `,
    variables: { 
      id: "01"
    }
  })
  .then((result) => console.log(result));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
