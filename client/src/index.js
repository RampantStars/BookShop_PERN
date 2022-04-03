import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import BookStore from './store/BookStore';
import UserStore from './store/UserStore';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        user: new UserStore(),
        book: new BookStore(),
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>
);
