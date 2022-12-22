import { render as rtlRender, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { legacy_createStore as createStore} from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import { rootReducer } from './reducers/rootReducer';

const store = createStore(rootReducer);

const render = component => rtlRender(
    <Provider store={store}>
        {component}
    </Provider>
)

const renderWithRouter = (ui, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)

  return {
    ...render(ui, {wrapper: BrowserRouter}),
  }
}

test('landing on a bad page', () => {
  renderWithRouter(<App />, {route: '/something-that-does-not-match'})

  expect(screen.getByText(/PAGE NOT FOUND/i)).toBeInTheDocument()
});

test('redirect to search', () => {
  renderWithRouter(<App />, {route: '/'})

  expect(screen.getByText(/SEARCH/i)).toBeInTheDocument()
});