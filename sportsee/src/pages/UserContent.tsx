import DailyActivityGraph from "../components/DailyActivityGraph.tsx";
import StatsGraph from "../components/StatsGraph.tsx";
import AverageSessions from "../components/AverageSessions.tsx";
import SkillsRadar from "../components/SkillsRadar.tsx";
import ScoreGraph from "../components/ScoreGraph.tsx";
import {useUserData} from "../hooks/useUserData.tsx";
import NotFoundContent from "./NotFoundContent.tsx";

export default function UserContent({userId}: {userId: number}) {
    const { data, error } = useUserData({userId: userId, mocked: true})

    //Early return on error
    if (error?.includes("404")) {
        return <NotFoundContent />;
    }

    // Early return if data is null
    if (!data) {
        return <div>Chargement...</div>
    }

    document.title = "Sportsee - " + data.firstName

    return <>
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
    </>
}