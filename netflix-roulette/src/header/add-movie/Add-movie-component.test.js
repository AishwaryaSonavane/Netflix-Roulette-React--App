import { fireEvent, render as rtlRender, screen, waitFor } from "@testing-library/react"
import { rootReducer } from "../../reducers/rootReducer";
import { legacy_createStore as createStore} from 'redux';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AddMovieComponent from "./Add-movie-component";

const store = createStore(rootReducer);

const render = component => rtlRender(
    <Provider store={store}>
        {component}
    </Provider>
)

test('should render add movie button', async () => {
    render(
       <BrowserRouter>
            <AddMovieComponent/>
       </BrowserRouter>
    );
    const buttonText = screen.getAllByText(/Add Movie/i);
    await waitFor(() => expect(buttonText).toBeInTheDocument());
});

test('should show add movie Model if add movie button is clicked', async () => {
    render(
       <BrowserRouter>
            <AddMovieComponent/>
       </BrowserRouter>
    );
    fireEvent.click(screen.getByRole('button'));
    const modalText = screen.getAllByText('ADD MOVIE');
    await waitFor(() => expect(modalText).toBeInTheDocument());
});
