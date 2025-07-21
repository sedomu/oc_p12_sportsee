import "./styles/main.css"
import useFetch from './hooks/useFetch'

function App() {


    const data = useFetch({userId: 18, mocked: true})
    console.log(data)

  
  return (
    <>
        <header className="header">
            <nav className="header__menu">
                <ul>
                    <li><img className="header__logo" src="./assets/logo.svg" alt="Sportsee logo"/></li>
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
                        <li><img className="leftbar__badges--icon" src="./assets/badge_relaxation.svg"/></li>
                        <li><img className="leftbar__badges--icon" src="./assets/badge_swim.svg"/></li>
                        <li><img className="leftbar__badges--icon" src="./assets/badge_bike.svg"/></li>
                        <li><img className="leftbar__badges--icon" src="./assets/badge_fitness.svg"/></li>
                    </ul>
                </div>
                <div className="leftbar__copyright">Copyright, SportSee 2020</div>
            </div>
            <div className="content">Content</div>
        </main>
    </>
  )
}

export default App
