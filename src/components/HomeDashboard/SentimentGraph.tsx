"use client"

import { Card, CardHeader, CardTitle } from "../ui/card";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Jan",
    total: 56,
  },
  {
    name: "Feb",
    total: 78,
  },
  {
    name: "Mar",
    total: 45,
  },
  {
    name: "Apr",
    total: 35,
  },
  {
    name: "May",
    total: 55,
  },
  {
    name: "Jun",
    total: 85,
  },
];

const percentageFormatter = (value:any) => `${value}%`;

export default function SentimentGraph() {
  return (
    <>
      <Card className="h-[20rem] xl:h-auto xl:row-span-2 xl:col-span-1 flex flex-col">
        <CardHeader>
          <CardTitle>Sentiment</CardTitle>
        </CardHeader>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              type="number"
              domain={[25, 100]}
              tickFormatter={percentageFormatter}
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </>
  );
}
