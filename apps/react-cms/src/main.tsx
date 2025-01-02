import * as ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { client } from '@CMS-POC/graphQL';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);