import { NavLink } from "react-router-dom";
import { TOPIC_NAMES } from "../../constants/topicNames";

const TopicIndex = () => {
  return (
    <>
      <div>
        <nav>
          <NavLink to={TOPIC_NAMES.USE_EFFECT} className={(e) => (e.isActive ? "text-yellow-500!" : "")}>useEffect</NavLink> |{" "}
          <NavLink to={TOPIC_NAMES.USE_STATE} className={(e) => (e.isActive ? "text-yellow-500!" : "")}>useState</NavLink> |{" "}
          <NavLink to={TOPIC_NAMES.USE_REF} className={(e) => (e.isActive ? "text-yellow-500!" : "")}>useRef</NavLink>
        </nav>
      </div>
    </>
  )
}

export default TopicIndex;
