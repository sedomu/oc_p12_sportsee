import "./styles/main.css"
import {Link} from "react-router";

function NotFound() {
    return (
        <>
            <header className="header">
                <nav className="header__menu">
                    <ul>
                        <li><img className="header__logo"
                                 src="/assets/logo.svg" alt="Sportsee logo"/>
                        </li>
                        <li>Accueil</li>
                        <li>Profil</li>
                        <li>Réglages</li>
                        <li>Communauté</li>
                    </ul>
                </nav>
            </header>

            <main>
                <div className="leftbar">
                    <div className="leftbar__badges">
                        <ul>
                            <li><img className="leftbar__badges--icon"
                                     src="/assets/badge_relaxation.svg"/></li>
                            <li><img className="leftbar__badges--icon"
                                     src="/assets/badge_swim.svg"/></li>
                            <li><img className="leftbar__badges--icon"
                                     src="/assets/badge_bike.svg"/></li>
                            <li><img className="leftbar__badges--icon"
                                     src="/assets/badge_fitness.svg"/></li>
                        </ul>
                    </div>
                    <div className="leftbar__copyright">Copyright, SportSee
                        2020
                    </div>
                </div>
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
            </main>
        </>
    );
}

export default NotFound
