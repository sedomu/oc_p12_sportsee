import {
    Bar,
    BarChart,
    CartesianGrid,
    Label,
    Legend, ResponsiveContainer, Tooltip,
    XAxis,
    YAxis
} from "recharts";
import { colours } from "./colours";

type Props = {
    data: any
}

export default function DailyActivityGraph({data}: Props) {

    for (let i = 0; i < data.length; i++) {
        data[i].dataKey = i + 1;
    }

    const CustomTooltip = ({ active, payload }: any) => {
        if (active && payload && payload.length) {
            return (
                <div style={{
                    backgroundColor: colours.redTootltip,
                    color: colours.whitePoint,
                    fontSize: "0.5rem",
                    lineHeight: "1.5rem",
                    textAlign: "center",
                    padding: '8px',
                    border: 'none'
                }}>
                    <p>{`${payload[0].payload.kilogram} kg`}</p>
                    <p>{`${payload[0].payload.calories} kCal`}</p>
                </div>
            );
        }
        return null;
    };


    const MyChart = () => (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{top: 32, right: 0, left: 0, bottom: 32}} syncId="anyId" barGap={8} barSize={8}>
                <XAxis dataKey="dataKey" tickLine={false} stroke={colours.greyText} tickMargin={24}/>
                <YAxis yAxisId="right" stroke={colours.greyText} orientation="right" dataKey="kilogram" domain={["dataMin - 2", "dataMax + 2"]} allowDecimals={false} tickLine={false} axisLine={false} interval={0} tickMargin={32}/>
                <CartesianGrid horizontal={true} vertical={false} stroke={colours.greyGrid} strokeDasharray="2 2" strokeWidth={"1px"} syncWithTicks={true}/>
                <Bar dataKey="kilogram" fill={colours.black} radius={[3, 3, 0, 0]} yAxisId="right"/>
                <Bar dataKey="calories" fill={colours.orange} radius={[3, 3, 0, 0]}/>
                <Tooltip
                    cursor={{fill: colours.greyCursor}}
                    content={<CustomTooltip/>}
                />
            </BarChart>
        </ResponsiveContainer>
    );

    return <>
        <div className="content__graphs--dailyActivity-title">
            <div>Activité quotidienne</div>
            <ul>
                <li><svg height={8} width={8}><circle cx="4" cy="4" r="4" fill={colours.black}></circle></svg>Poids (kg)</li>
                <li><svg height={8} width={8}><circle cx="4" cy="4" r="4" fill={colours.orange}></circle></svg>Calories brûlées (kCal)</li>
            </ul>
        </div>
        {MyChart()}
    </>
}