"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 500 },
  { name: "Jun", value: 900 },
  { name: "Jul", value: 1100 },
]

export function BlockchainStats() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="text-sm font-medium text-muted-foreground">Network Hash Rate</div>
          <div className="text-2xl font-bold">293.2 EH/s</div>
        </div>
        <div className="space-y-2">
          <div className="text-sm font-medium text-muted-foreground">Difficulty</div>
          <div className="text-2xl font-bold">52.4 T</div>
        </div>
        <div className="space-y-2">
          <div className="text-sm font-medium text-muted-foreground">Block Height</div>
          <div className="text-2xl font-bold">824,593</div>
        </div>
        <div className="space-y-2">
          <div className="text-sm font-medium text-muted-foreground">Avg Block Time</div>
          <div className="text-2xl font-bold">12.4s</div>
        </div>
      </div>

      <div className="h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

