import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { describe, expect, it } from "vitest";
import Recipes from '../../pages/Recipe/Recipes';

describe("Recipes Page", () => {

    it("Link to Search page exist", () => {

        render(
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Recipes />} />
                    </Routes>
                </BrowserRouter>
            </>

        );
        expect(screen.getByTestId("To-Search")).toHaveAttribute('href', '/SearchRecipes');
    });

    it("Link to Meal Plan page exist", () => {
        render(
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Recipes />} />
                    </Routes>
                </BrowserRouter>
            </>
        );
        expect(screen.getByTestId("To-MealPlan")).toHaveAttribute('href', '/MealPlan');
    });
});
