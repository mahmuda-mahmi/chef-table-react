/* eslint-disable react/prop-types */
import './Sidebar.css'

const Sidebar = ({ wantCook, cooking, handleCooking }) => {
    return (
        <div className="border rounded-xl border-zinc-200 p-6 shadow-lg h-[550px] sticky top-12 overflow-y-scroll">
            <div>
                <h1 className="text-center text-2xl font-bold text-gray-800">Want to cook: {wantCook.length}</h1>
                <hr className="my-5" />
                <table className="w-full">
                    <tr className="text-left *:pb-5">
                        <th className="w-[6%]"></th>
                        <th className="w-[50%]">Name</th>
                        <th className="w-[20%]">Time</th>
                        <th className="w-[24%]"></th>
                    </tr>
                    {
                        wantCook.map((wantDish, idx) =>
                            <tr className="*:pb-3" key={idx}>
                                <td className="font-bold">{idx + 1}</td>
                                <td>{wantDish.name}</td>
                                <td>{wantDish.prepTimeMinutes} min</td>
                                <td className="text-center"><button className="bg-success text-sm text-white rounded-full py-2 w-full" onClick={() => handleCooking(wantDish)}>Preparing</button></td>
                            </tr>
                        )
                    }

                </table>
            </div>
            <div>
                <h2 className="text-center text-2xl font-bold text-gray-800 mt-5">Cooking: {cooking.length}</h2>
                <hr className="my-5" />
                <table className="w-full">
                    <tr className="text-left *:pb-5">
                    <th className="w-[6%]"></th>
                        <th className="w-[50%]">Name</th>
                        <th className="w-[20%]">Time</th>
                        <th className="w-[24%]"></th>
                    </tr>
                    {
                        cooking.map((eachDish, idx) =>
                            <tr className="*:pb-3" key={idx}>
                                <td>{idx+1}</td>
                                <td>{eachDish.name}</td>
                                <td>{eachDish.cookTimeMinutes} min</td>
                                <td className="text-center"><button className="bg-success text-sm text-white rounded-full py-2 w-full">Cooking</button></td>
                            </tr>
                        )
                    }

                </table>
            </div>
        </div>
    );
};

export default Sidebar;