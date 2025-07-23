import "./styles/main.css"
import useFetch from './hooks/useFetch'
import DailyActivityGraph from "./components/DailyActivityGraph.tsx";
import {type JSX, type Ref, type RefObject, useRef} from "react";

function App() {


    const data = useFetch({userId: 12, mocked: true})

    const dailyActivity: RefObject<JSX.Element> = useRef(<div>init - pour éviter un possible null...</div>);
    const autre = useRef("init - pour éviter un possible null...");
    // Je vais me séparer de ces variables plus haut: utiliser le composant natif de recharts (ResponsiveContainer)

  
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
            <div className="content">
                <div className="content__greetings">
                    <p className="hello">Bonjour <span className="firstname">{data && data.firstName}</span></p>
                    <p className="encouragement">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
                <div className="content__graphs">
                    <div ref={dailyActivity} className="content__graphs--dailyActivity">
                        {data && <DailyActivityGraph data={data.lastSessions} width={dailyActivity.current.offsetWidth} height={dailyActivity.current.offsetHeight}/>}
                    </div>
                    <div className="content__graphs--stats"></div>
                    <div ref={autre} className="content__graphs--averageSessions">
                        {data && autre && <DailyActivityGraph data={data.lastSessions} width={autre.current.offsetWidth} height={autre.current.offsetHeight}/>}
                    </div>
                    <div className="content__graphs--categories"></div>
                    <div className="content__graphs--score"></div>
                </div>
            </div>
        </main>
    </>
  )
}

export default App
