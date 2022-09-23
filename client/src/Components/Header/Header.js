import './Header.scss';
import { NavLink } from "react-router-dom";
import heartIcon from "../../Assets/Images and Icons/heartIcon.png"


function Header() {

    return (
        <div className="Header">
            <h1 className="Header__title"><img className="Header__title-icon" src={heartIcon} alt="" />  MyNR</h1>
            <ul className="Header__list">
                <li>
                    <NavLink className="Header__link" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className="Header__link" to="/Schedule">Schedule</NavLink></li>
                <li>
                    <NavLink className="Header__link" to="/Medications">Meds</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Header;
