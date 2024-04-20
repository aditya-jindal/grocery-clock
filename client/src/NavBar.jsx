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
          <div className="flex justify-around w-3/6 items-center">
            <NavLink
              to="/recipes"
              className="border-b-2 border-transparent hover:border-current transition-all duration-300 ease-in-out"
            >
              Recipes
            </NavLink>
            <NavLink
              to="/groceries"
              className="border-b-2 border-transparent hover:border-current transition-all duration-300 ease-in-out"
            >
              Fridge
            </NavLink>
            <NavLink
              to="/trash"
              className="border-b-2 border-transparent hover:border-current transition-all duration-300 ease-in-out"
            >
              Trash
            </NavLink>{" "}
            <NavLink
              to="/uploadImg"
              className="border-b-2 border-transparent hover:border-current transition-all duration-300 ease-in-out"
            >
              Upload Reciept
            </NavLink>
            <NavLink
              to="/"
              onClick={handleLogout}
              className="border-b-2 border-transparent hover:border-current transition-all duration-300 ease-in-out"
            >
              Logout
            </NavLink>{" "}
          </div>
        )}
      </ul>
    </div>
  );
}

export default NavBar;
