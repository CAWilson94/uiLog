import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import "./index.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:9090/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
);
