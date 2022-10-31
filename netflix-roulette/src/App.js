import './App.css';
import ErrorBoundary from './error/error-boundary';
import Header from './header/Header-component';
import Movies from './movies/Movies';

function App() {
  return (
    <>
      <Header />
      <ErrorBoundary>
        <Movies />
      </ErrorBoundary>
    </>
  );
}

export default App;
