import { NavLink } from "react-router-dom";

function NavBar({ handleLogout }) {
  return (
    <ul className="flex gap-8">
      <NavLink to="/recipes">Recipes</NavLink>
      <NavLink to="/groceries">Fridge</NavLink>
      <NavLink to="/trash">Trash</NavLink>
      <NavLink to="/uploadImg">Upload Reciept</NavLink>
      <NavLink to="/" onClick={handleLogout}>
        Logout
      </NavLink>
    </ul>
  );
}

export default NavBar;
