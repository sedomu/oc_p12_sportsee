import "./styles/main.css"
import {useFetch} from './hooks/useFetch'
import DailyActivityGraph from "./components/DailyActivityGraph.tsx";
import StatsGraph from "./components/StatsGraph.tsx";
import AverageSessions from "./components/AverageSessions.tsx";
import SkillsRadar from "./components/SkillsRadar.tsx";
import ScoreGraph from "./components/ScoreGraph.tsx";

type data = {
    firstName: string,
    calories: number,
    protein: number,
    carbohydrate: number,
    lipid: number,
    lastSessions: {
        day: string,
        kilogram: number,
        calories: number,
        dataKey?: number | undefined
    }[],  // Ajout des crochets pour indiquer un tableau
    averageSessions: {
        day: number,
        sessionLength: number
    }[],  // Ajout du type averageSessions
    skillsKind: {
        [key: number]: string
    },    // Ajout du type skillsKind
    skillsData: {
        value: number,
        kind: number
    }[],  // Ajout du type skillsData
    score: number  // Ajout du type score
}


function App() {
    const data: data | null = useFetch({userId: 12, mocked: true})

    // Early return si data est null
    if (!data) {
        return <div>Chargement...</div>
    }

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
                        <p className="hello">Bonjour <span
                            className="firstname">{data.firstName}</span>
                        </p>
                        <p className="encouragement">Félicitation ! Vous avez
                            explosé vos objectifs hier 👏</p>
                    </div>
                    <div className="content__graphs">
                        <div className="content__graphs--dailyActivity">
                            {data &&
                              <DailyActivityGraph lastSessions={data.lastSessions}/>}
                        </div>
                        <div className="content__graphs--stats">
                            <StatsGraph iconSrc={"/assets/calories-icon.svg"} figure={data && data.calories} unit={"kCal"} intakeText={"Calories"}/>
                            <StatsGraph iconSrc={"/assets/protein-icon.svg"} figure={data && data.protein} unit={"g"} intakeText={"Protéines"}/>
                            <StatsGraph iconSrc={"/assets/carbs-icon.svg"} figure={data && data.carbohydrate} unit={"g"} intakeText={"Glucides"}/>
                            <StatsGraph iconSrc={"/assets/fat-icon.svg"} figure={data && data.lipid} unit={"g"} intakeText={"Lipides"}/>
                        </div>
                        <div className="content__graphs--averageSessions">
                            {data &&
                              <AverageSessions averageSessions={data.averageSessions}/>}
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
