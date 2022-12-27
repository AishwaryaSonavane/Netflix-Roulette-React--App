import { BrowserRouter } from "react-router-dom";
import { fireEvent, render as rtlRender, screen, waitFor } from "@testing-library/react"
import { legacy_createStore as createStore} from 'redux';
import { Provider } from "react-redux";
import { rootReducer } from "../../reducers/rootReducer";
import MovieSort from "./Movie-sort";

const store = createStore(rootReducer);

const render = component => rtlRender(
    <Provider store={store}>
        {component}
    </Provider>
);

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate
}));

test('should render sort options', () => {
    render(
       <BrowserRouter>
            <MovieSort/>
       </BrowserRouter>
    );
    const sortOptionText = screen.getAllByText(/RELEASE DATE/i);
    waitFor(() => expect(sortOptionText).toBeInTheDocument());
});

test('should call sortMovies method and navigate to correct path', () => {     
    render(
       <BrowserRouter>
            <MovieSort/>
       </BrowserRouter>
    );
    const input = screen.getByTestId('select-option');

    fireEvent.change(input, {target: {value: 'vote_average'}});
    expect(mockedUsedNavigate).toHaveBeenCalledWith('?sort=vote_average');
});