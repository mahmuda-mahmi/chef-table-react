import { MdOutlineLocalFireDepartment, MdOutlineStarOutline } from "react-icons/md";

const Recipe = ({ recipe }) => {
    const { id, name, ingredients, instructions, prepTimeMinutes, cookTimeMinutes, servings, difficulty, cuisine, caloriesPerServing, tags, userId, image, rating, reviewCount } = recipe;
    return (
        <div className="border rounded-xl border-zinc-200 p-6 shadow-lg flex flex-col">
            <img className="w-full h-52 mb-4 object-cover rounded-xl" src={image} alt={name} />
            <h2 className="font-bold text-2xl">{name}</h2>
            <p className="text-gray-500">{cuisine}</p>
            <hr className="my-2" />
            <h3 className="text-lg font-semibold">Ingredients:</h3>
            <p className="text-gray-500 flex-grow mt-3">{` ${ingredients} `}</p>
            <div className="flex gap-5 my-4">
                <p className="flex items-center font-semibold"><MdOutlineLocalFireDepartment /> {caloriesPerServing} Calories</p>
                <p className="flex items-center"><MdOutlineStarOutline />{`${rating}(${reviewCount})`}</p>
            </div>
            <button className="btn btn-success w-32 rounded-lg text-white font-semibold">Want To Cook</button>
        </div>
    );
};

export default Recipe;