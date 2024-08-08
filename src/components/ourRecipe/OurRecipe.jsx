import Recipes from "./recipes/Recipes";
import Sidebar from "./sidebar/Sidebar";


const OurRecipe = () => {
    return (
        <div>
            <div className='w-2/3 mx-auto text-center my-16'>
                <h2 className='font-bold text-3xl leading-loose'>Our Recipes</h2>
                <p className=''>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>
            <div className="grid grid-cols-[65%_35%] gap-4">
                <Recipes></Recipes>
                <Sidebar></Sidebar>
            </div>
        </div>
    );
};

export default OurRecipe;