import { NavLink } from "react-router-dom";

function NavBar({ handleLogout }) {
  return (
    <ul className="flex bg-yellow-400 py-4 px-8 text-xl justify-between w-full">
      <NavLink to="/" className="w-2/6 text-3xl tracking-wider">
        <span className="text-green-700 font-semibold">Grocery</span>
        <span className="font-semibold">Clock</span>
      </NavLink>
      <div className="flex justify-between w-3/6">
        <NavLink to="/recipes">Recipes</NavLink>
        <NavLink to="/groceries">Fridge</NavLink>
        <NavLink to="/trash">Trash</NavLink>
        <NavLink to="/uploadImg">Upload Reciept</NavLink>
        <NavLink to="/" onClick={handleLogout}>
          Logout
        </NavLink>
      </div>
    </ul>
  );
}

export default NavBar;
