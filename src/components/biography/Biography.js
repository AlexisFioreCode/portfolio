import Moi from './img/moi.jpg'
function Bio() {
    return(
        <div className="container text-center my-3 text-focus-in">
            <div>
                <h2 className="my-3 anton">Qui suis-je ?</h2>
                <p className="text-justify">Je m'appelle Alexis Fiorentino j'ai 24 ans.<br/>
                Je suis actuellement en formation de Développeur Web a l'AFPA de Saint-Etienne du Rouvray 
                dans le cadre d'une reconversion après avoir travaillé pendant quelque années en tant qu'Employé libre-service , 
                étant  encore jeune et ayant un attrait certain pour les nouvelles technologies ainsi que pour le développement Web en général et 
                ses nombreuses formes je me suis dit que j'avait enfin trouvé un métier que j'aime faire et que je continuerai à faire pour longtemps car se métier évolue tout le temps .</p>
                <p className="text-justify my-2"> Mes principales passions sont les jeux vidéos, films et séries ( animé ou non) , mais dernièrement c'est le monde du développement 
                Web et le code en général qui me passione tellement les connaissances sont immenses.</p>
                <img src={Moi}  className="img-fluid my-2"/>
            </div>
            <h3 className="my-4 anton">Mes compétences apprises pendant ma formation pour l'instant</h3>
            <ul class="list-group list-group-flush ">
                <li class="list-group-item firstColor secondColor">HTML5</li>
                <li class="list-group-item firstColor secondColor">CSS3, Bootstrap et Flexbox</li>
                <li class="list-group-item firstColor secondColor">Javascript (DOM , boucle , requête AJAX)</li>
                <li class="list-group-item firstColor secondColor">React JS (intro)</li>
            </ul>
        </div>
        
    )
}
export default Bio