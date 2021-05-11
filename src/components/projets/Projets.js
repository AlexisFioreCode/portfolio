import starwarsproject from './img/starwarsproject.png';
import memoproject from './img/memoproject.png';
import Bankproject from './img/Bankproject.png'
import TDGproject from './img/TDGproject.png'

function Projets() {
    return(
        <div className="text-center container my-3">
            <h2 className="secondColor anton text-focus-in">Mes Projets fait en formation</h2>
            <div className="row">
                <div className="col-12 col-lg-6">
                    <div className="card fade-in">
                        <img src={starwarsproject}  className="card-img-top" alt="Capture écran Projet Star Wars" />
                        <div className="card-body">
                            <h5 className="card-title">Projet Star Wars React</h5>
                            <p className="card-text">Voici mon premier Projet React, utilisant des requêtes d'une API pour afficher les différentes catégories d'un objet JSON sur le thème de Star wars</p>
                            <a href="https://github.com/AlexisFioreCode/starwarsreact" target='_blank'  rel='noreferrer noopener' className="btn btn-primary hover m-1">Repo github</a>
                            <a href="https://alexisfiorecode.github.io/starwarsreact/" target='_blank'  rel='noreferrer noopener' className="btn btn-primary hover m-1">GH-page</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="card fade-in">
                        <img src={memoproject} className="card-img-top" alt="Capture d'écran projet mémory" />
                        <div className="card-body">
                            <h5 className="card-title">Projet Memory</h5>
                            <p className="card-text">Un memory game with JavaScript fait dans le cadre d'une évaluation récapitulative de la première partie front-end de ma formation AFPA développeur Web.</p>
                            <a href="https://github.com/AlexisFioreCode/Jeumemo"  target='_blank' rel='noreferrer noopener' className="btn btn-primary hover m-1">Repo github</a>
                            <a href="https://alexisfiorecode.github.io/Jeumemo/" target='_blank'  rel='noreferrer noopener' className="btn btn-primary hover m-1">GH-page</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="card fade-in">
                        <img src={Bankproject} className="card-img-top" alt="Capture d'écran projet Banque" />
                        <div className="card-body">
                            <h5 className="card-title">Projet Banque</h5>
                            <p className="card-text">Premier projet utilisant les requêtes API avec AJAX , ainsi que création d'un layer en javascript et AJAX cliquable le faisant disparaitre. </p>
                            <a href="https://github.com/AlexisFioreCode/Bankproject" target='_blank' rel='noreferrer noopener' className="btn btn-primary hover m-1">Repo github</a>
                            <a href="https://alexisfiorecode.github.io/Bankproject/" target='_blank'  rel='noreferrer noopener' className="btn btn-primary hover m-1">GH-page</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="card fade-in">
                        <img src={TDGproject} className="card-img-top" alt="Capture d'écran projet Terre de Geek" />
                        <div className="card-body">
                            <h5 className="card-title">Projet Terre de Geek</h5>
                            <p className="card-text">Un projet HTML/CSS sans Javascript et sans Bootstrap pour expérimenter Flexbox et pour voir la création de Wireframe.</p>
                            <a href="https://github.com/AlexisFioreCode/ProjetTDG" target='_blank' rel='noreferrer noopener' className="btn btn-primary hover m-1">Repo github</a>
                            <a href="https://alexisfiorecode.github.io/ProjetTDG/" target='_blank'  rel='noreferrer noopener' className="btn btn-primary hover m-1">GH-page</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projets