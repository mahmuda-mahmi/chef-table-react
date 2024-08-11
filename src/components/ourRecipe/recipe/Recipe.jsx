/* eslint-disable react/prop-types */
import { MdOutlineLocalFireDepartment, MdOutlineStarOutline } from "react-icons/md";

const Recipe = ({ recipe, handleWantCook }) => {
    const { id, name, ingredients, prepTimeMinutes, cuisine, caloriesPerServing, image, rating, reviewCount , instructions} = recipe;
    return (
        <div className="border rounded-xl border-zinc-200 p-6 shadow-lg flex flex-col">
            <img className="w-full h-52 mb-4 object-cover rounded-xl" src={image} alt={name} />
            <h2 className="font-bold text-2xl">{name}</h2>
            <p className="text-gray-500">{cuisine}</p>
            <hr className="my-2" />
            <h3 className="text-lg font-semibold">Ingredients:</h3>
            <p className="text-gray-500 flex-grow mt-3">{` ${ingredients} `}</p>
            <p className="font-semibold mt-3">Prep Time: {prepTimeMinutes} Minutes</p>
            <div className="flex gap-5 my-4">
                <p className="flex items-center font-semibold"><MdOutlineLocalFireDepartment /> {caloriesPerServing} Calories</p>
                <p className="flex items-center"><MdOutlineStarOutline />{`${rating}(${reviewCount})`}</p>
            </div>
            <div className="flex gap-5 my-4">
                <button onClick={() => handleWantCook(recipe)} className="btn btn-success w-32 rounded-lg text-white font-semibold">Want To Cook</button>

                <button className="btn  btn-success w-20 rounded-lg text-white font-semibold" onClick={() => document.getElementById(id).showModal()}>Details</button>
                <dialog id={id} className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <h2 className="font-bold text-2xl">{name}</h2>
                        <p className="text-gray-500">{cuisine}</p>
                        <hr className="my-2" />
                        <h3 className="text-lg font-semibold">Ingredients:</h3>
                        <p className="text-gray-500 flex-grow mt-3">{` ${ingredients} `}</p>
                        <h3 className="text-lg font-semibold mt-3">Instructions</h3>
                        <p className="text-gray-500 flex-grow ">{` ${instructions} `}</p>
                        <p className="font-semibold mt-3">Prep Time: {prepTimeMinutes} Minutes</p>
                        <div className="flex gap-5 my-4">
                            <p className="flex items-center font-semibold"><MdOutlineLocalFireDepartment /> {caloriesPerServing} Calories</p>
                            <p className="flex items-center"><MdOutlineStarOutline />{`${rating}(${reviewCount})`}</p>
                        </div>
                        <button onClick={() => handleWantCook(recipe)} className="btn btn-success w-32 rounded-lg text-white font-semibold">Want To Cook</button>
                            
                        
                    </div>
                    <form method="dialog"  className="modal-backdrop">
                                {/* if there is a button, it will close the modal */}
                                <button>Close</button>
                            </form>
                </dialog>
            </div>

        </div>
    );
};

export default Recipe;