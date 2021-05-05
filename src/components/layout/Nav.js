function Nav() {
    return (
        <nav className="firstColor">
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link text-white" to="/Bio">Bio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" to="/Projets">Projets</a>
                </li>
                <li className="nav-item">
                    <a href="mailto:alexis.fiorentino@hotmail.fr" alt="Contactez-moi"><i class="fas fa-at"></i></a>
                </li>

            </ul>
        </nav>
    );
}

export default Nav;