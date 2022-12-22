import { fireEvent, render as rtlRender, screen, waitFor } from "@testing-library/react"
import { rootReducer } from "../../reducers/rootReducer";
import SearchComponent from "./Search-component";
import { legacy_createStore as createStore} from 'redux';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { getMoviesFromApi } from "../../api/api";

const store = createStore(rootReducer);

const render = component => rtlRender(
    <Provider store={store}>
        {component}
    </Provider>
)

test('should render search button', () => {
    render(
       <BrowserRouter>
            <SearchComponent/>
       </BrowserRouter>
    );
    const buttonText = screen.getAllByText(/SEARCH/i);
    waitFor(() => expect(buttonText).toBeInTheDocument());
});

test('should match search valu with browser path and action to be called', async () => {
    const spyDispatch = jest.spyOn(store, 'dispatch');

    render(
       <BrowserRouter>
            <SearchComponent/>
       </BrowserRouter>
    );
   
    const input = screen.getByPlaceholderText('What do you want to watch?');

    // Click button
    fireEvent.change(input, {target: {value: 'Coco'}});
    fireEvent.click(screen.getByText('SEARCH'));

    expect(input).toHaveValue('Coco');
    expect(window.location.pathname).toBe('/search/Coco');
    const data = await getMoviesFromApi('Coco','', 'title');
    expect(spyDispatch).toHaveBeenCalled();
});