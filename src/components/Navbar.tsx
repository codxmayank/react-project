import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-end gap-4 mb-10 bg-blue-900 rounded-lg p-6">
      <NavLink to="/">
        <div className="text-2xl font-bold mr-10">Project</div>
      </NavLink>
      <NavLink to="/home" className={e => e.isActive ? "text-green-500!" : ""}>
        <h6>Home</h6>
      </NavLink>
      <NavLink to="/contact" className={e => e.isActive ? "text-green-500!" : ""}>
        <h6>Contact</h6>
      </NavLink>
      <NavLink to="/about" className={e => e.isActive ? "text-green-500!" : ""}>
        <h6>About</h6>
      </NavLink>
    </div>
  )
}

export default Navbar;
