import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import ErrorBoundary from './error/error-boundary';
import Header from './header/Header-component';
import Movies from './movies/Movies';
import PageNotFound from './error/page-not-found';
import './App.css';

export const MovieDetailContext = React.createContext();

function App() {
  const [value, setValue] = useState();
  return (
    <Router>
      <MovieDetailContext.Provider value={{value, setValue}}>
        <Header />
        <ErrorBoundary> 
          <Routes>
              <Route path="/" element={<Navigate to="/search"/>} />
              <Route path="/search" element={ 
                    <Movies />
              }>
                <Route path=":searchQuery" element={ <Movies />}></Route>
              </Route>
              <Route path="*" element={ <PageNotFound/>} />
          </Routes>
          </ErrorBoundary>
      </MovieDetailContext.Provider>
    </Router>
  );
}

export default App;
