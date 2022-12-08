import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
			<NavLink to="/meetings">Meetings</NavLink>
            {/* <span> | </span> */}
			<NavLink to="/add">Add Meeting</NavLink>
        </div>
    );
}

export default Menu;
