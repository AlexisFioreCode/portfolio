function Nav() {
    return (
        <nav className="firstColor py-2">
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link secondColor btn  btn-outline hover " to="/Bio"><i class="fas fa-user-alt me-2"></i>Bio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link secondColor btn btn-outline hover " to="/Projets">Projets</a>
                </li>
                <li className="nav-item">
                    <a href="mailto:alexis.fiorentino@hotmail.fr" className=" btn btn-outline hover"><i class="fas fa-envelope me-2 pb-2 mt-1"></i>Contact</a>
                </li>

            </ul>
        </nav>
    );
}

export default Nav;