import { NavLink } from "react-router-dom";

const TopicIndex = () => {
  return (
    <>
      <div>

        <nav>
          <NavLink to="useEffect" className={(e) => (e.isActive ? "text-yellow-500!" : "")}>useEffect</NavLink> |{" "}
          <NavLink to="useState" className={(e) => (e.isActive ? "text-yellow-500!" : "")}>useState</NavLink> |{" "}
          <NavLink to="memo" className={(e) => (e.isActive ? "text-yellow-500!" : "")}>Memo</NavLink>
        </nav>
      </div>
    </>
  )
}

export default TopicIndex;
