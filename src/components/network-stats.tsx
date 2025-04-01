"use client"

import { motion } from "framer-motion"

export function NetworkStats() {
  const stats = [
    { name: "Hash Rate", value: "293.2 EH/s", change: "+5.4%" },
    { name: "Difficulty", value: "52.4 T", change: "+2.1%" },
    { name: "Block Height", value: "824,593", change: "+144/day" },
    { name: "Avg Block Time", value: "12.4s", change: "-0.2s" },
    { name: "Active Nodes", value: "15,432", change: "+3.2%" },
    { name: "Transaction Fee", value: "0.00042 BTC", change: "-1.5%" },
  ]

  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="space-y-2 p-4 border rounded-lg"
        >
          <p className="text-sm font-medium text-muted-foreground">{stat.name}</p>
          <p className="text-2xl font-bold">{stat.value}</p>
          <p className="text-xs text-muted-foreground">{stat.change}</p>
        </motion.div>
      ))}
    </div>
  )
}

