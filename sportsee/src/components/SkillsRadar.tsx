import { colours } from "./colours";
import {
    PolarAngleAxis,
    PolarGrid, Radar,
    RadarChart, ResponsiveContainer
} from "recharts";

type Props = {
    skillsKind: {
        [key: number]: string,
    },
    skillsData:
        {
            value: number,
            kind: number
        }[]
}

export default function SkillsRadar({skillsKind, skillsData}: Props) {
    const skillsKindToFrench: { [key: string]: string } = {
        "cardio": "Cardio",
        "energy": "Énergie",
        "endurance": "Endurance",
        "strength": "Force",
        "speed": "Vitesse",
        "intensity": "Intensité"
    }

    const formattedData = skillsData.map(skill => ({
        ...skill,
        kindToDisplay: skillsKindToFrench[skillsKind[skill.kind]]
    }));

    return <>
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={formattedData} margin={{right: 40, left: 40}}>
                <PolarGrid radialLines={false}/>
                <PolarAngleAxis dataKey={"kindToDisplay"} axisLine={false} tick={{ fill: colours.whitePoint, fontSize: "0.75rem" }} />
                <Radar dataKey={"value"} stroke="none" fill={colours.redRadar} fillOpacity={0.7} activeDot={false} />
            </RadarChart>
        </ResponsiveContainer>
    </>;
}