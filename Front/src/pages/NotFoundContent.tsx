import {Link} from "react-router";

export default function NotFoundContent() {
    return <>
        <div className="content">
            <div className="content__greetings">
                <p className="hello">Erreur 404: page introuvable
                </p>
                <p className="encouragement">Projet en cours de développement: seule la route "/user/:userId" a été développée à ce stade.</p>
                <p className="encouragement">Dans le dataset de développement actuel, seuls les userId "12" et "18" sont présents.</p>
                <p className="encouragement"><Link to={"/user/12"}>Naviguer vers le userId 12</Link></p>
                <p className="encouragement"><Link to={"/user/18"}>Naviguer vers le userId 18</Link></p>
            </div>
        </div>
    </>
}