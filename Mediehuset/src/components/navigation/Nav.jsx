import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import style from './Nav.module.scss';
import logo from './../../assets/Logo.png';

export function Nav() {

    return (
        <>
        <nav className={style.myNav}>
            <span>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <p>4-7 juli 2022</p>
                </div>
                <div>
                    <ul>
                        <li><Link to="/">Forside</Link></li>
                        <li><Link to="/pages/Events">Events</Link></li>
                        <li><Link to="/pages/Camps">Camps</Link></li>
                        <li><Link to="/pages/Billeleter">Billeleter</Link></li>
                        <li><Link to="/pages/Praktisk">Praktisk info</Link></li>
                        <li><Link to="/pages/Login">Login</Link></li>
                        <li><CiSearch /></li>
                    </ul>
                </div>
            </span>
        </nav>
        </>
    )
}