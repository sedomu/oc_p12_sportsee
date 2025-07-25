import {
    Cell,
    RadialBar,
    RadialBarChart,
    ResponsiveContainer,
} from "recharts";
import {colours} from "./colours.ts";

export default function ScoreGraph({score}) {
    const formattedScore = [
        {
            "value": score,
            "type": "completed",
            "color": colours.redRadialBar
        },
        {
            "value": 1,
            "type": "completion setter",
            "color": "none"
        }
    ]

    const scoreToPercent = String(Math.floor(score * 100)) + "%"

    return <>
        <div className="content__graphs--score-title">
            <span className="content__graphs--score-title-figure">{scoreToPercent}</span><br/>
            de votre<br/>objectif
        </div>
        <div className="content__graphs--score-circle">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle r="60" cx="60" cy="60" fill={colours.whitePoint}></circle>
            </svg>
        </div>
        <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                data={formattedScore}
                startAngle={90}
                endAngle={450}
            >
                <RadialBar
                    dataKey="value"
                    cornerRadius={"50%"}
                    background={{fill: colours.greyBackground}}
                >
                    {
                        formattedScore.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} id={entry.type}/>
                        ))
                    }
                    </RadialBar>
            </RadialBarChart>
        </ResponsiveContainer>

    </>
}