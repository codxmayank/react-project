import { NavLink } from "react-router-dom";
import { TOPIC_NAMES } from "../../constants/topicNames";

const TopicIndex = () => {
  return (
    <>
      <div>
        <nav>
          <NavLink to={TOPIC_NAMES.USE_EFFECT} className={(e) => (e.isActive ? "text-yellow-500!" : "")}>useEffect</NavLink> |{" "}
          <NavLink to={TOPIC_NAMES.USE_STATE} className={(e) => (e.isActive ? "text-yellow-500!" : "")}>useState</NavLink> |{" "}
          <NavLink to={TOPIC_NAMES.USE_REF} className={(e) => (e.isActive ? "text-yellow-500!" : "")}>useRef</NavLink> |{" "}
          <NavLink to={TOPIC_NAMES.CUSTOM_HOOKS} className={(e) => (e.isActive ? "text-yellow-500!" : "")}>Custom Hooks</NavLink> |{" "}
          <NavLink to={TOPIC_NAMES.REACT_MEMO} className={(e) => (e.isActive ? "text-yellow-500!" : "")}>React.memo</NavLink> |{" "}
        </nav>
      </div>
    </>
  )
}

export default TopicIndex;
