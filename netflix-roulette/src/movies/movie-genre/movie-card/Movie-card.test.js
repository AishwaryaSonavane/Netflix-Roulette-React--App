import { BrowserRouter } from "react-router-dom";
import { fireEvent, render as rtlRender, screen, waitFor } from "@testing-library/react"
import { legacy_createStore as createStore} from 'redux';
import { Provider } from "react-redux";
import { rootReducer } from "../../../reducers/rootReducer";
import MovieCard from "./Movie-card";
import { MovieDetailContext } from "../../../App";
import React from "react";

const store = createStore(rootReducer);
const mockFn = jest.fn().mockImplementation(callback => {
    return callback(mockMovie);
  });;

const render = component => rtlRender(
    <Provider store={store}>
        {component}
    </Provider>
);

const mockMovie = {
    title: "Changed title",
    id: 1234,
    poster_path: "https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg",
    genres: ["Comedy","Horror"],
    release_date: "2016-12-29",
    vote_average: '7.9',
    runtime: '128',
    overview: "New movie overview"
}

const mockSetState = jest.fn();

jest.mock("react", () => ({
    ...jest.requireActual("react"),
    useState:  initial => [initial, mockSetState]
}));

test('should display movie title', () => {
    render(
       <BrowserRouter>
            <MovieDetailContext.Provider  value={{mockMovie,mockFn}}>
            <MovieCard  movie={mockMovie}/>
            </MovieDetailContext.Provider>
       </BrowserRouter>
    );
    const test = screen.getByTestId('movie-title');
    waitFor(() => expect(test).toHaveValue(mockMovie.title));
});


test('should display edit delete modal ', () => {
    render(
       <BrowserRouter>
            <MovieDetailContext.Provider  value={{mockMovie,mockFn}}>
            <MovieCard  movie={mockMovie} />
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
            <MovieDetailContext.Provider  value={{mockMovie,mockFn}}>
            <MovieCard  movie={mockMovie} />
            </MovieDetailContext.Provider>
       </BrowserRouter>
    );
    const selectMovie = screen.getByRole('img');
    //fireEvent.click(selectMovie);
    //expect(window.location.pathname).teBe('/movie=1234');
});