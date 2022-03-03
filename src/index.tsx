// import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Query
import { QueryClient, QueryClientProvider } from 'react-query';
// Provider
import { Provider } from "react-redux";
// Store import
import { store } from "./state/store";

const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={client}>
    {/* store => props */}
    <Provider store={store}>
      <App />
    </Provider>
  </QueryClientProvider>,
  document.getElementById('root')
);
