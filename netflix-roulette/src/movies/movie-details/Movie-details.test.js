import React from "react";
import { render, screen, waitFor } from "@testing-library/react"
import { MovieDetailContext } from "../../App";
import { mockMovieData as value } from "../../mock-data/mock-test-data";
import MovieDetails from "./Movie-details";


test('should display movie title', async () => {
    render(
            <MovieDetailContext.Provider  value={{value}}>
                <MovieDetails/>
            </MovieDetailContext.Provider>
    );
    const input = screen.getByTestId('title');
    await waitFor(() => expect(input).toHaveValue(value.title));
});
