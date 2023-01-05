import React from "react";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render as rtlRender, screen, waitFor } from "@testing-library/react"
import { legacy_createStore as createStore} from 'redux';
import { Provider } from "react-redux";
import { rootReducer } from "../../../reducers/rootReducer";
import { MovieDetailContext } from "../../../App";
import { mockMovieData as value } from "../../../mock-data/mock-test-data";
import MovieCard from "./Movie-card";

const store = createStore(rootReducer);
const setValue = jest.fn();

const render = component => rtlRender(
    <Provider store={store}>
        {component}
    </Provider>
);

const mockSetState = jest.fn();

jest.mock("react", () => ({
    ...jest.requireActual("react"),
    useState:  initial => [initial, mockSetState]
}));

test('should display movie title', async () => {
    render(
       <BrowserRouter>
            <MovieDetailContext.Provider  value={{value,setValue}}>
            <MovieCard  movie={value}/>
            </MovieDetailContext.Provider>
       </BrowserRouter>
    );
    const test = screen.getByTestId('movie-title');
    await waitFor(() => expect(test).toHaveValue(value.title));
});


test('should display edit delete modal ', () => {
    render(
       <BrowserRouter>
            <MovieDetailContext.Provider  value={{value,setValue}}>
            <MovieCard  movie={value} />
            </MovieDetailContext.Provider>
       </BrowserRouter>
    );
    const input = screen.getByRole('button');
    fireEvent.click(input);
    expect(mockSetState).toHaveBeenCalledWith(true);
});

test('should show movie id in path ', () => {
    render(
       <BrowserRouter>
            <MovieDetailContext.Provider  value={{value,setValue}}>
            <MovieCard  movie={value} />
            </MovieDetailContext.Provider>
       </BrowserRouter>
    );
    const selectMovie = screen.getByRole('img');
    fireEvent.click(selectMovie);
    expect(window.location.pathname).toEqual('/movie=1234');
});