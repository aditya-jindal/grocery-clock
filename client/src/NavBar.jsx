import { NavLink } from "react-router-dom";

function NavBar({ isSubmitted, handleLogout }) {
  return (
    <div className="h-16 w-full">
      <ul className="flex bg-yellow-400 py-4 pl-8 text-xl justify-between w-full fixed top-0 font-semibold z-10">
        <NavLink to="/" className="w-2/6 text-3xl tracking-wider">
          <span className="text-green-700 font-semibold">Grocery</span>
          <span className="font-semibold">Clock</span>
        </NavLink>
        {isSubmitted && (
          <div className="flex justify-around w-3/6 items-center ">
            <NavLink to="/recipes">Recipes</NavLink>
            <NavLink to="/groceries">Fridge</NavLink>
            <NavLink to="/trash">Trash</NavLink>
            <NavLink to="/uploadImg">Upload Reciept</NavLink>
            <NavLink to="/" onClick={handleLogout}>
              Logout
            </NavLink>
          </div>
        )}
      </ul>
    </div>
  );
}

export default NavBar;
