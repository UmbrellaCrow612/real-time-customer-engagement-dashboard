"use client";

import { SigmaIcon } from "lucide-react";
import { Card, CardHeader, CardTitle } from "../ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", likes: 300, comments: 200, shares: 100 },
  { name: "Feb", likes: 400, comments: 150, shares: 200 },
  { name: "Mar", likes: 600, comments: 300, shares: 350 },
  { name: "Apr", likes: 800, comments: 400, shares: 500 },
  { name: "May", likes: 1000, comments: 500, shares: 650 },
  { name: "Jun", likes: 1200, comments: 600, shares: 800 },
];

export default function EngagementMetrics() {
  return (
    <Card className="h-[20rem] xl:h-auto xl:row-span-2 xl:col-span-1 flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Engagement Metrics <SigmaIcon className="w-4 h-4" />
        </CardTitle>
      </CardHeader>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="likes"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="comments"
            stroke="#82ca9d"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="shares"
            stroke="#ffc658"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
