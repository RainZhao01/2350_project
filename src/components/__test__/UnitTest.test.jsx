import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { describe, expect, it } from "vitest";
import Recipes from '../../pages/Recipe/Recipes';
// import { SearchRecipes } from '../../pages/Recipe/SearchRecipe';
// import { Workout } from '../../pages/Workout/Workout';


describe("Unit test", () => {

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

    // it("No result message when you search for nothing", () => {
    //     render(
    //         <>
    //             <BrowserRouter>
    //                 <Routes>
    //                     <Route path="/Workout" element={<Workout />}/>
    //                 </Routes>
    //             </BrowserRouter>
    //         </>
    //     );
    //     screen.debug();
    //     expect(screen.getByTestId("")).toHaveTextContent('No Results Found');
    // });
});
