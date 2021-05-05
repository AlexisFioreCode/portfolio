function Footer() {
    return(
        <footer className="firstColor p-2 text-center text-white">
            <p>Portfolio React</p>
        <section className="mb-4">
            {/* Fgithub */}
            <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/AlexisFioreCode" target="_blank" role="button"><i class="fab fa-github"></i></a>
            {/* Twitter */}
            <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/AlexisFiorenti2" target="_blank" role="button"><i className="fab fa-twitter"></i></a>
            {/* Instagram */}
            <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/alexis-fiorentino-8092bb1a2/" target="_blank" role="button"><i class="fab fa-linkedin"></i></a>
        </section>
        </footer>
    );
}

export default Footer;