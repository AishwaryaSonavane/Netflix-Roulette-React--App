import { BrowserRouter } from "react-router-dom";
import { fireEvent, render as rtlRender, screen, waitFor } from "@testing-library/react"
import { legacy_createStore as createStore} from 'redux';
import { Provider } from "react-redux";
import { rootReducer } from "../../reducers/rootReducer";

import DeleteMovieModal from "./Delete-Movie-Modal";
import { deleteMovieFromApi } from "../../api/api";

const store = createStore(rootReducer);

const render = component => rtlRender(
    <Provider store={store}>
        {component}
    </Provider>
);

test('should show modal title', () => {
    render(
        <BrowserRouter>
             <DeleteMovieModal showDeleteModal="true"/>
        </BrowserRouter>
     );
    const text = screen.getAllByText(/DELETE MOVIE/i);
    waitFor(() => expect(text).toBeInTheDocument());
});

test('should call props closeDeleteModal method', () => {
    const mockFn = jest.fn();
    render(
        <BrowserRouter>
             <DeleteMovieModal showDeleteModal="true" closeDeleteModal={mockFn}/>
        </BrowserRouter>
     );
    const input = screen.getByText(/x/i);
    fireEvent.click(input);
    expect(mockFn).toHaveBeenCalled();
});


test('should call props closeDeleteModal method', async() => {
    //const mockFn = jest.spyOn(DeleteMovieModal, 'deleteMovie');
    //const a = jest.spyOn(deleteMovieFromApi)
    const mock = jest.fn().mockResolvedValue({status: 204});
    const mockFn = jest.fn();
    render(
        <BrowserRouter>
             <DeleteMovieModal movieId={425895}  showDeleteModal="true" closeDeleteModal={mockFn}/>
        </BrowserRouter>
     );
    const input = screen.getByRole('button');
    fireEvent.click(input);
    mock();
    //const data = await deleteMovieFromApi(425895);
    //expect(mockFn).toHaveBeenCalled();
    //expect(mockFn).toHaveBeenCalled();
});