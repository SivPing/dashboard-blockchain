"use client"

import { useState } from "react"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

const data = [
  { name: "Jan", BTC: 40000, ETH: 2800, SOL: 120, KHR: 4000000 },
  { name: "Feb", BTC: 45000, ETH: 3000, SOL: 140, KHR: 4500000 },
  { name: "Mar", BTC: 42000, ETH: 2900, SOL: 130, KHR: 4200000 },
  { name: "Apr", BTC: 48000, ETH: 3200, SOL: 150, KHR: 4800000 },
  { name: "May", BTC: 52000, ETH: 3500, SOL: 170, KHR: 5200000 },
  { name: "Jun", BTC: 50000, ETH: 3300, SOL: 160, KHR: 5000000 },
  { name: "Jul", BTC: 55000, ETH: 3700, SOL: 180, KHR: 5500000 },
]

export function AnalyticsCharts() {
  const [chartType, setChartType] = useState("line")

  return (
    <div className="space-y-4">
      <Tabs defaultValue="line" onValueChange={setChartType} className="w-full">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="line">Line</TabsTrigger>
            <TabsTrigger value="area">Area</TabsTrigger>
            <TabsTrigger value="bar">Bar</TabsTrigger>
          </TabsList>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-blue-500"></div>
              <span className="text-sm">BTC</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-purple-500"></div>
              <span className="text-sm">ETH</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <span className="text-sm">SOL</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <span className="text-sm">KHR</span>
            </div>
          </div>
        </div>

        <TabsContent value="line" className="mt-2">
          <motion.div
            key="line"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Line yAxisId="left" type="monotone" dataKey="BTC" stroke="#3b82f6" strokeWidth={2} />
                <Line yAxisId="left" type="monotone" dataKey="ETH" stroke="#8b5cf6" strokeWidth={2} />
                <Line yAxisId="left" type="monotone" dataKey="SOL" stroke="#22c55e" strokeWidth={2} />
                <Line yAxisId="right" type="monotone" dataKey="KHR" stroke="#ef4444" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </TabsContent>

        <TabsContent value="area" className="mt-2">
          <motion.div
            key="area"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="BTC" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                <Area type="monotone" dataKey="ETH" stackId="2" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.3} />
                <Area type="monotone" dataKey="SOL" stackId="3" stroke="#22c55e" fill="#22c55e" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>
        </TabsContent>

        <TabsContent value="bar" className="mt-2">
          <motion.div
            key="bar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="BTC" fill="#3b82f6" />
                <Bar dataKey="ETH" fill="#8b5cf6" />
                <Bar dataKey="SOL" fill="#22c55e" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

