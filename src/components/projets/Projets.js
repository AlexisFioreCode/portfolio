import starwarsproject from './img/starwarsproject.png';
import memoproject from './img/memoproject.png';
import Bankproject from './img/Bankproject.png'
import TDGproject from './img/TDGproject.png'

function Projets() {
    return(
        <div className="text-center container my-3">
            <h2 className="secondColor anton text-focus-in">Mes Projets fait en formation</h2>
            <div className="card fade-in">
                <img src={starwarsproject}  className="card-img-top" alt="Capture écran Projet Star Wars" />
                <div className="card-body">
                    <h5 className="card-title">Projet Star Wars React</h5>
                    <p className="card-text">Premier Projet React, utilisant des requêtes d'une API pour afficher les différentes catégories d'un objet JSON sur le thème de Star wars</p>
                    <a href="https://github.com/AlexisFioreCode/starwarsreact" target='_blank'  rel='noreferrer noopener' className="btn btn-primary hover">Repo github</a>
                </div>
            </div>
            <div className="card fade-in">
                <img src={memoproject} className="card-img-top" alt="Capture d'écran projet mémory" />
                <div className="card-body">
                    <h5 className="card-title">Projet Memory</h5>
                    <p className="card-text">Memory game with JavaScript fait dans le cadre d'une évaluation récapitulative de la première partie front-end de ma formation AFPA développeur Web.</p>
                    <a href="https://github.com/AlexisFioreCode/Jeumemo"  target='_blank' rel='noreferrer noopener' className="btn btn-primary hover">Repo github</a>
                </div>
            </div>
            <div className="card fade-in">
                <img src={Bankproject} className="card-img-top" alt="Capture d'écran projet Banque" />
                <div className="card-body">
                    <h5 className="card-title">Projet Banque</h5>
                    <p className="card-text">Premier projet utilisant les requêtes API avec AJAX , ainsi que création d'un layer cliquable le faiant disparaitre. </p>
                    <a href="https://github.com/AlexisFioreCode/Bankproject" target='_blank' rel='noreferrer noopener' className="btn btn-primary hover">Repo github</a>
                </div>
            </div>
            <div className="card fade-in">
                <img src={TDGproject} className="card-img-top" alt="Capture d'écran projet Terre de Geek" />
                <div className="card-body">
                    <h5 className="card-title">Projet Terre de Geek</h5>
                    <p className="card-text">Premier projet HTML/CSS sans Javascript et sans Bootstrap pour expérimenter Flexbox et pour voir la création de Wireframe.</p>
                    <a href="https://github.com/AlexisFioreCode/ProjetTDG" target='_blank' rel='noreferrer noopener' className="btn btn-primary">Repo github</a>
                </div>
            </div>
        </div>
    )
}

export default Projets