import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "@/components/ui/card";

export default function Barchart({ data, xKey, yKeys, colors, yDomain, yTicks, bgColor }) {
    return (
        <Card className="border-0 w-[98%] p-3 shadow-md flex flex-col" style={{ backgroundColor: bgColor }}>
            <CardContent className="p-0 flex-1">
                <ResponsiveContainer width="100%" height={200}>
                    <BarChart 
                        data={data} 
                        barSize={10} 
                        barCategoryGap={20} 
                        barGap={1}
                        margin={{ top: 20, right: 20, left: 20, bottom: 30 }} // Adjusted margin to provide more space
                    >
                        <CartesianGrid vertical={false} strokeDasharray="3 3" />
                        <XAxis
                            dataKey={xKey}
                            tickLine={false}
                            tickMargin={20} // Increased margin to prevent cutting off
                            axisLine={false}
                            interval={0} // Ensures all labels are shown
                            tick={({ x, y, payload }) => (
                                <text
                                    x={x}
                                    y={y}
                                    dx={-5}
                                    dy={5} // Pushes text downward to avoid cutting off
                                    textAnchor="middle"
                                    fontSize={11}
                                    fontWeight="normal"
                                    transform={`rotate(-45, ${x}, ${y})`} // Rotates at 45° instead of 90°
                                >
                                    {payload.value}
                                </text>
                            )}
                        />

                        <Tooltip cursor={{ fill: "#f0f0f0" }} />
                        {yKeys.map((key, index) => (
                            <Bar key={key} dataKey={key} fill={colors[index]} radius={[3, 3, 0, 0]} />
                        ))}
                        <YAxis
                            domain={yDomain}
                            ticks={yTicks}
                            tick={{ fontSize: 10, fontWeight: "bold" }}
                            tickLine={false}
                            tickMargin={8}
                            axisLine={false}
                            width={25} // Ensure enough space for labels but no extra padding
                        />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}