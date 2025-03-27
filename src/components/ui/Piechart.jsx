import * as React from "react";
import { Pie, PieChart, Cell, Label, Tooltip } from "recharts";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function Piechart({ title, chartData }) {
    const total = chartData.reduce((acc, item) => acc + item.value, 0);

    return (
        <Card className="bg-white pt-2 rounded-3xl lg:w-[100%] flex justify-center">
            <CardContent className="flex items-center gap-6 xl:gap-2 justify-center sm:flex-row flex-col">
                <PieChart width={200} height={200} >
                    <Pie
                        data={chartData}
                        dataKey="value"
                        nameKey="name"
                        innerRadius={55}
                        outerRadius={80}
                        paddingAngle={3}
                        startAngle={90}
                        endAngle={450}
                    >
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                        <Label
                            position="center"
                            content={({ viewBox }) => {
                                if (viewBox?.cx && viewBox?.cy) {
                                    return (
                                        <text
                                            x={viewBox.cx}
                                            y={viewBox.cy}
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                        >
                                            <tspan
                                                className="fill-black text-2xl font-bold"
                                            >
                                                {chartData[0].value}%
                                            </tspan>
                                        </text>
                                    );
                                }
                            }}
                        />
                    </Pie>
                    <Tooltip />
                </PieChart>

                <div className="grid grid-cols-2 gap-x-6 gap-y-2 ">
                    {chartData.map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                            <span
                                className="sm:w-1 sm:h-6 rounded-full"
                                style={{ backgroundColor: item.color }}
                            ></span>
                            <div>
                                <p className="text-sm text-gray-700">{item.name}</p>
                                <p className="text-lg font-semibold">{item.value}%</p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
