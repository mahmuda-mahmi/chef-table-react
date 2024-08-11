import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../recipe/Recipe";

const Recipes = ({handleWantCook}) => {

    const[recipes, setRecipes] = useState([]);
    useEffect( () => {
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    } ,[])

    // const [wantCook, setWantCook] = useState([]);

    // const handleWantCook = (recipe) => {
    //     const newWantCook = [...wantCook, recipe];
    //     setWantCook(newWantCook);
    // }

    return (
        <div className="grid grid-cols-2 gap-3">
            {
                recipes.map((recipe, idx) => <Recipe key={idx} recipe={recipe}
                handleWantCook ={handleWantCook}></Recipe>)
            }
        </div>
    );
};

export default Recipes;