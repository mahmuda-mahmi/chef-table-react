import { useState } from "react";
import Swal from 'sweetalert2'
import Recipes from "./recipes/Recipes";
import Sidebar from "./sidebar/Sidebar";


const OurRecipe = () => {
    const [wantCook, setWantCook] = useState([]);
    const [cooking, setCooking] = useState([]);
    
    const handleWantCook = (recipe) => {
        const isExist = cooking.find(item => item.id == recipe.id);
        if (!wantCook.includes(recipe) && !isExist) {
            const newWantCook = [...wantCook, recipe];
            setWantCook(newWantCook);
        }
        else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You already choose it!"
              });
        }
    }
    
    
    const handleCooking = (cook) => {
        
        if (!cooking.includes(cook)) {
            const newCooking = [...cooking, cook];
            setCooking(newCooking);
            const filterCooking = wantCook.filter((newCook) => newCook.id !== cook.id);
            setWantCook(filterCooking); 
        }
    }

    return (
        <div>
            <div className='w-2/3 mx-auto text-center my-16'>
                <h2 className='font-bold text-3xl leading-loose'>Our Recipes</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>
            <div className="grid grid-cols-[65%_35%] gap-4">
                <Recipes handleWantCook={handleWantCook}></Recipes>
                <Sidebar wantCook={wantCook}
                    cooking={cooking}
                    handleCooking={handleCooking}></Sidebar>
            </div>
        </div>
    );
};

export default OurRecipe;