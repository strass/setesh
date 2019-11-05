import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Router, View } from 'react-navi';
import { mount, route, Route, redirect } from 'navi';
import OAuthLandingPage from './pages/OAuth/Landing';
import { AuthContextProvider } from './context/Auth';
import '@blueprintjs/core/lib/css/blueprint.css';
import PostingsListPage from './pages/Postings/List';
import PostingCreatePage from './pages/Postings/Create';
import PostingViewPage from './pages/Postings/View';

import 'antd/dist/antd.css';

// import * as serviceWorker from './serviceWorker';

if (!process.env.REACT_APP_HASURA_SECRET)
  throw new Error('Missing environment variable: REACT_APP_HASURA SECRET');

const httpLink = createHttpLink({
  uri: 'https://hasura.zaks.pw/v1/graphql',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'x-hasura-admin-secret': process.env.REACT_APP_HASURA_SECRET,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const routes = mount({
  '/': redirect('/games'),
  '/games/create': route({
    view: <PostingCreatePage />,
  }),
  '/games/:gameId': route(({ params: { gameId } }) => ({
    view: <PostingViewPage gameId={gameId} />,
  })),
  '/games': route({
    view: <PostingsListPage />,
  }),
  '/oauth/discord': route({
    view: ({ route }: { route: Route }) => <OAuthLandingPage hash={route.url.hash} />,
  }),
});

ReactDOM.render(
  <AuthContextProvider>
    <ApolloProvider client={client}>
      <Router routes={routes}>
        <React.Suspense fallback={'loading'}>
          <View />
        </React.Suspense>
      </Router>
    </ApolloProvider>
  </AuthContextProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
