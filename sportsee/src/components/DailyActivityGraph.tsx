import {Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis} from "recharts";
import { colours } from "./colours";

type Props = {
    data: any,
    width: number,
    height: number,
}

export default function DailyActivityGraph({data, width, height}: Props) {

    for (let i = 0; i < data.length; i++) {
        data[i].dataKey = i + 1;
    }

    console.log(data)
    console.log(width)
    console.log(height)

    const MyChart = () => (
        <BarChart width={width} height={height} data={data} margin={{top: 30, right: 0, left: 0, bottom: 0}} syncId="anyId">
            <svg><text>Hello world</text></svg>
            <XAxis dataKey="dataKey" tickLine={false} stroke={colours.greyText}/>
            <YAxis yAxisId="right" stroke={colours.greyText} orientation="right" dataKey="kilogram" domain={["dataMin - 1", "dataMax + 2"]} allowDecimals={false} tickLine={false} axisLine={false} interval={0}/>
            <CartesianGrid horizontal={true} vertical={false} stroke={colours.greyGrid} strokeDasharray="2 2" strokeWidth={"1px"} syncWithTicks={true}/>
            <Bar dataKey="kilogram" fill={colours.black} barSize={7} radius={[3, 3, 0, 0]} yAxisId="right"/>
            <Bar dataKey="calories" fill={colours.orange} barSize={7} radius={[3, 3, 0, 0]}/>
            <Legend align="right" verticalAlign="top" iconSize={10} iconType="circle" formatter={(value) => <span style={{ color: colours.greyText}}>{value}</span>} wrapperStyle={{transform: "translate(0, -30px)"}}/>
        </BarChart>
    );

    return <>
        <div>Activité quotidienne</div>
        {MyChart()}
    </>
}