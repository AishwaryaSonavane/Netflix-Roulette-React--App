
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render as rtlRender, screen, waitFor } from "@testing-library/react"
import { legacy_createStore as createStore} from 'redux';
import { Provider, useSelector } from "react-redux";
import userEvent from "@testing-library/user-event";
import AddEditMovieModel from "./Add-Edit-Movie-Model";
import { rootReducer } from "../../reducers/rootReducer";

const store = createStore(rootReducer);

const render = component => rtlRender(
    <Provider store={store}>
        {component}
    </Provider>
);
const mockAppState = {
    editMovieDetails: {
        title: "DUMMY_MOVIE"
    }
}

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
  }));

beforeEach(() => {
    useSelector.mockImplementation(callback => {
      return callback(mockAppState);
    });
});

test('should show EDIT modal title', async () => {
    render(
        <BrowserRouter>
                <AddEditMovieModel isOpen="true"/>
        </BrowserRouter>
    );
    const text = screen.getAllByText(/EDIT MOVIE/i);
    await waitFor(() => expect(text).toBeInTheDocument());
    
});

test('should close modal', () => {
    const spyDispatch = jest.spyOn(store, 'dispatch');
    render(
        <BrowserRouter>
                <AddEditMovieModel isOpen="true"/>
        </BrowserRouter>
    );
    const input = screen.getByText('X');
    fireEvent.click(input);
    expect(spyDispatch).toHaveBeenCalled();
});

test('should close modal on submit', async () => {
    const spyDispatch = jest.spyOn(store, 'dispatch');
    const handleSubmit = jest.fn();
    render(
        <BrowserRouter>
                <AddEditMovieModel isOpen="true" onSubmit={handleSubmit}/>
        </BrowserRouter>
    );
    const user = userEvent.setup();
    
    await user.type(screen.getByLabelText(/title/i), 'New title')
    await user.type(screen.getByLabelText(/MOVIE URL/i), 'https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg')
    await user.type(screen.getByLabelText(/GENRE/i), 'Comedy,Horror')
    await user.type(screen.getByLabelText(/RELEASED DATE/i), '2016-12-29')
    await user.type(screen.getByLabelText(/RATING/i), '7.9')
    await user.type(screen.getByLabelText(/RUNTIME/i), '128')
    await user.type(screen.getByLabelText(/OVERVIEW/i), 'New movie overview')

    const input = screen.getByText(/submit/i);
    fireEvent.click(input);
    await waitFor(() => expect(spyDispatch).toHaveBeenCalled());
});



