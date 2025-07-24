import {colours} from "./colours.ts";
import {
    Bar,
    BarChart,
    CartesianGrid, Line, LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

export default function AverageSessions({data}) {
    const dayKeys = ["L", "Ma", "Me", "J", "V", "S", "D"]

    for (let i = 0; i < data.length; i++) {
        data[i].dataKey = dayKeys[i]
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

    const MyChart = () => (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{top: 16, right: 16, left: 16, bottom: 40}} >

                <defs>
                    <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
                        <stop offset="75%" stopColor="#FFFFFF" stopOpacity="1" />
                        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
                    </linearGradient>
                </defs>

                <XAxis dataKey={(v) => v.dataKey} tickFormatter={(vl) => vl[0]} axisLine={false} tickLine={false} tickMargin={16} />
                <Line type="monotone" dataKey="sessionLength" stroke="url(#lineGradient)" strokeWidth={2} dot={false} activeDot={{r: 4, fill: colours.whitePoint, strokeWidth: 8, strokeOpacity: 0.2, id: "AverageSessionsActiveDot"}} />
                <Tooltip content={<CustomTooltip/>}/>
            </LineChart>
        </ResponsiveContainer>
    )

    return <>
        <div className="content__graphs--averageSessions-title">
            <div>Durée moyenne des sessions</div>
        </div>
        {MyChart()}
    </>
}