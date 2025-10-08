export default function Header() {
    return <>
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
    </>
}