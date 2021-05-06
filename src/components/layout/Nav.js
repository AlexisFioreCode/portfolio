import {Link} from "react-router-dom";
function Nav() {
    return (
        <nav className="firstColor py-2">
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link secondColor btn btn-outline hover" to="/bio"><i className="fas fa-user-alt me-2"></i>Bio</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link secondColor btn btn-outline hover" to="/projets">Projets</Link>
                </li>
                <li className="nav-item">
                    <a href="mailto:alexis.fiorentino@hotmail.fr" rel='noreferrer noopener' className=" btn btn-outline hover"><i className="fas fa-envelope me-2 pb-2 mt-1"></i>Contact</a>
                </li>

            </ul>
        </nav>
    );
}

export default Nav;