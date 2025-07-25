import {colours} from "./colours.ts";
import {
 Line, LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis
} from "recharts";

type Props = {
    averageSessions: {
        day: number,
        sessionLength: number,
        dataKey?: string
    }[]
}

export default function AverageSessions({averageSessions}: Props) {
    const dayKeys = ["L", "Ma", "Me", "J", "V", "S", "D"]

    console.log(averageSessions)


    for (let i = 0; i < averageSessions.length; i++) {
        averageSessions[i].dataKey = dayKeys[i]
    }

    const CustomTooltip = ({ active, payload }: any) => {
        if (active && payload && payload.length) {
            return (
                <div style={{
                    backgroundColor: colours.whitePoint,
                    color: colours.blackPoint,
                    fontSize: "0.5rem",
                    lineHeight: "1.5rem",
                    textAlign: "center",
                    padding: '8px',
                    border: 'none'
                }}>
                    <p>{`${payload[0].payload.sessionLength} min`}</p>
                </div>
            );
        }
        return null;
    };

    const handleMouseMove = (activeDot: HTMLElement | null) => {
        if (activeDot) {
            const overlay: HTMLDivElement | null = document.querySelector(".content__graphs--averageSessions-overlay")
            const activeDotX = (Number(activeDot.getAttribute("cx")) + 24).toString() + "px"
            overlay ? overlay.style.left = activeDotX : null
        }
    }

    const MyChart = () => (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={averageSessions} margin={{top: 16, right: 8, left: 8, bottom: 40}} onMouseMove={() => {handleMouseMove(document.getElementById("AverageSessionsActiveDot"))}}>

                <defs>
                    <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
                        {/*<stop offset="75%" stopColor="#FFFFFF" stopOpacity="1" />*/}
                        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
                    </linearGradient>
                </defs>

                <XAxis dataKey={(v) => v.dataKey} tickFormatter={(vl) => vl[0]} axisLine={false} tickLine={false} tickMargin={16} tick={{ fill: colours.whiteTransparentText }} />
                <Line type="monotone" dataKey="sessionLength" stroke="url(#lineGradient)" strokeWidth={2} dot={false} activeDot={{r: 4, fill: colours.whitePoint, strokeWidth: 8, strokeOpacity: 0.2, id: "AverageSessionsActiveDot"}} />
                <Tooltip content={<CustomTooltip/>} cursor={false}/>
            </LineChart>
        </ResponsiveContainer>
    )

    return <>
        <div className={"content__graphs--averageSessions-overlay"}></div>
        <div className="content__graphs--averageSessions-title">
            <div>Durée moyenne des sessions</div>
        </div>
        {MyChart()}
    </>
}