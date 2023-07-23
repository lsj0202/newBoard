import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Global } from "@emotion/react";
import { globalStyles } from "../commons/styles/globalStyles";
import Header from "../components/header";

const client = new ApolloClient({
  uri: "http://backend-practice.codebootcamp.co.kr/graphql",
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <ApolloProvider client={client}>
        <Global styles={globalStyles} />
        <Header />
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}
