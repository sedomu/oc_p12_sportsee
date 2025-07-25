import "./styles/main.css"
import useFetch from './hooks/useFetch'
import DailyActivityGraph from "./components/DailyActivityGraph.tsx";
import {type JSX, type Ref, type RefObject, useRef} from "react";
import StatsGraph from "./components/StatsGraph.tsx";
import AverageSessions from "./components/AverageSessions.tsx";
import SkillsRadar from "./components/SkillsRadar.tsx";
import ScoreGraph from "./components/ScoreGraph.tsx";

function App() {


    const data = useFetch({userId: 12, mocked: true})

    console.log(data)

    return (
        <>
            <header className="header">
                <nav className="header__menu">
                    <ul>
                        <li><img className="header__logo"
                                 src="./assets/logo.svg" alt="Sportsee logo"/>
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
                                     src="./assets/badge_relaxation.svg"/></li>
                            <li><img className="leftbar__badges--icon"
                                     src="./assets/badge_swim.svg"/></li>
                            <li><img className="leftbar__badges--icon"
                                     src="./assets/badge_bike.svg"/></li>
                            <li><img className="leftbar__badges--icon"
                                     src="./assets/badge_fitness.svg"/></li>
                        </ul>
                    </div>
                    <div className="leftbar__copyright">Copyright, SportSee
                        2020
                    </div>
                </div>
                <div className="content">
                    <div className="content__greetings">
                        <p className="hello">Bonjour <span
                            className="firstname">{data && data.firstName}</span>
                        </p>
                        <p className="encouragement">Félicitation ! Vous avez
                            explosé vos objectifs hier 👏</p>
                    </div>
                    <div className="content__graphs">
                        <div className="content__graphs--dailyActivity">
                            {data &&
                              <DailyActivityGraph data={data.lastSessions}/>}
                        </div>
                        <div className="content__graphs--stats">
                            <StatsGraph iconSrc={"./assets/calories-icon.svg"} figure={data && data.calories} unit={"kCal"} intakeText={"Calories"}/>
                            <StatsGraph iconSrc={"./assets/protein-icon.svg"} figure={data && data.protein} unit={"g"} intakeText={"Protéines"}/>
                            <StatsGraph iconSrc={"./assets/carbs-icon.svg"} figure={data && data.carbohydrate} unit={"g"} intakeText={"Glucides"}/>
                            <StatsGraph iconSrc={"./assets/fat-icon.svg"} figure={data && data.lipid} unit={"g"} intakeText={"Lipides"}/>
                        </div>
                        <div className="content__graphs--averageSessions">
                            {data &&
                              <AverageSessions data={data.averageSessions}/>}
                        </div>
                        <div className="content__graphs--skills">
                            {data &&
                                <SkillsRadar skillsKind={data.skillsKind} skillsData={data.skillsData}/>
                            }
                        </div>
                        <div className="content__graphs--score">
                            {data &&
                                <ScoreGraph score={data.score} />
                            }
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default App
