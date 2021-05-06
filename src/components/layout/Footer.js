function Footer() {
    return(
        <footer className="firstColor text-center secondColor ">
            <p>Mes réseaux sociaux</p>
        <section className="">
            {/* github */}
            <a className="btn btn-outline btn-floating hover m-1" rel='noreferrer noopener' href="https://github.com/AlexisFioreCode" target="_blank" role="button"><i class="fab fa-github"></i></a>
            {/* Twitter */}
            <a className="btn btn-outline btn-floating hover m-1" rel='noreferrer noopener' href="https://twitter.com/AlexisFiorenti2" target="_blank" role="button"><i className="fab fa-twitter"></i></a>
            {/* Instagram */}
            <a className="btn btn-outline btn-floating hover m-1" rel='noreferrer noopener' href="https://www.linkedin.com/in/alexis-fiorentino-8092bb1a2/" target="_blank" role="button"><i class="fab fa-linkedin"></i></a>
        </section>
        </footer>
    );
}

export default Footer;