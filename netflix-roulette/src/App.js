import { useState } from 'react';
import './App.css';
import ErrorBoundary from './error/error-boundary';
import Header from './header/Header-component';
import Movies from './movies/Movies';
import React from 'react';


export const MovieDetailContext = React.createContext();

function App() {
  const [value, setValue] = useState();
  return (
    <>
    <MovieDetailContext.Provider value={{value, setValue}}>
      <Header />
        <ErrorBoundary>
          <Movies />
        </ErrorBoundary>
    </MovieDetailContext.Provider>
      
    </>
  );
}

export default App;
