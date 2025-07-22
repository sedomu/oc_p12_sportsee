import {Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis} from "recharts";
import { colours } from "./colours";

export default function DailyActivityGraph({data, width, height}) {

    for (let i = 0; i < data.length; i++) {
        data[i].dataKey = i + 1;
    }

    console.log(data)
    console.log(width)
    console.log(height)

    const MyChart = () => (
        <BarChart width={width} height={height} data={data}>
            <XAxis dataKey="dataKey" tickLine={false} stroke={colours.greyText}/>
            <YAxis yAxisId="right" stroke={colours.greyText} orientation="right" dataKey="kilogram" domain={["dataMin - 1", "dataMax + 2"]} allowDecimals={false} tickLine={true} axisLine={false} interval={0}/>
            <CartesianGrid horizontal={true} vertical={false} stroke={colours.greyGrid} strokeDasharray="2 2" strokeWidth={"1px"} syncWithTicks={true}/>
            <Bar dataKey="kilogram" fill={colours.black} barSize={7} radius={[3, 3, 0, 0]} yAxisId="right"/>
            <Bar dataKey="calories" fill={colours.orange} barSize={7} radius={[3, 3, 0, 0]}/>
            <Legend align="right" verticalAlign="top" iconSize={10} iconType="circle" formatter={(value) => <span style={{ color: colours.greyText}}>{value}</span>} />
        </BarChart>
    );

    return <>
        {MyChart()}
    </>
}