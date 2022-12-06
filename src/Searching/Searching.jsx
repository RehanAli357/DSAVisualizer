import react from "react";
import { NavLink } from "react-router-dom";
import "../Style/Searching.css";
const Searching = () => {
    return (
        <react.Fragment>
            <div className="Array">
                <div className="Searching">
                    <h1>Select The Searching Algorithm</h1>
                    <div className="btn">
                        <NavLink exact to='/LinearSearching'><button>Linear Searching</button></NavLink>
                        <NavLink exact to='/BinarySearching'><button>Binary Searching</button></NavLink>
                    </div>
                    <h2>More Algorithm Coming Soon</h2>
                </div>
            </div>
        </react.Fragment>
    );
}
export default Searching;