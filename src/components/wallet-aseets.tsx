"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ChevronDown, ChevronUp, Send } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "./ui/card"
import { Badge } from "./ui/badge"

interface Asset {
  id: string
  name: string
  symbol: string
  amount: string
  value: string
  change: string
  changeType: "positive" | "negative" | "neutral"
}

const assets: Asset[] = [
  {
    id: "1",
    name: "Ethereum",
    symbol: "ETH",
    amount: "3.45",
    value: "$10,350.00",
    change: "+5.2%",
    changeType: "positive",
  },
  {
    id: "2",
    name: "Bitcoin",
    symbol: "BTC",
    amount: "0.72",
    value: "$28,800.00",
    change: "+2.1%",
    changeType: "positive",
  },
  {
    id: "3",
    name: "USD Coin",
    symbol: "USDC",
    amount: "5,000.00",
    value: "$5,000.00",
    change: "0.0%",
    changeType: "neutral",
  },
  {
    id: "4",
    name: "Chainlink",
    symbol: "LINK",
    amount: "150.00",
    value: "$1,050.00",
    change: "-1.2%",
    changeType: "negative",
  },
  {
    id: "5",
    name: "Solana",
    symbol: "SOL",
    amount: "12.5",
    value: "$1,125.00",
    change: "+8.7%",
    changeType: "positive",
  },
  {
    id: "6",
    name: "Cardano",
    symbol: "ADA",
    amount: "2,500.00",
    value: "$875.00",
    change: "-0.5%",
    changeType: "negative",
  },
]

export function WalletAssets() {
  const [expandedAsset, setExpandedAsset] = useState<string | null>(null)

  const toggleAssetExpand = (id: string) => {
    setExpandedAsset(expandedAsset === id ? null : id)
  }

  return (
    <div className="space-y-4">
      {/* Column headers - visible on tablet and desktop */}
      <div className="hidden md:grid md:grid-cols-5 px-4 py-2 font-medium text-sm">
        <div>Asset</div>
        <div className="text-right">Amount</div>
        <div className="text-right">Value</div>
        <div className="text-right">Change</div>
        <div className="text-right">Actions</div>
      </div>

      {/* Asset cards */}
      {assets.map((asset) => (
        <div key={asset.id} className="relative">
          <Card className="cursor-pointer overflow-hidden" onClick={() => toggleAssetExpand(asset.id)}>
            {/* Mobile view */}
            <div className="md:hidden p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    {asset.symbol.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium">{asset.name}</div>
                    <div className="text-xs text-muted-foreground">{asset.symbol}</div>
                  </div>
                </div>
                {expandedAsset === asset.id ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <div className="text-xs text-muted-foreground">Amount</div>
                  <div>{asset.amount}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">Value</div>
                  <div>{asset.value}</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Badge
                  variant={
                    asset.changeType === "positive"
                      ? "default"
                      : asset.changeType === "negative"
                        ? "destructive"
                        : "outline"
                  }
                >
                  {asset.change}
                </Badge>

                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" onClick={(e) => e.stopPropagation()}>
                    <Send className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={(e) => e.stopPropagation()}>
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Tablet and desktop view */}
            <div className="hidden md:grid md:grid-cols-5 items-center p-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  {asset.symbol.charAt(0)}
                </div>
                <div>
                  <div className="font-medium">{asset.name}</div>
                  <div className="text-xs text-muted-foreground">{asset.symbol}</div>
                </div>
                {expandedAsset === asset.id ? (
                  <ChevronUp className="h-4 w-4 ml-1" />
                ) : (
                  <ChevronDown className="h-4 w-4 ml-1" />
                )}
              </div>
              <div className="text-right">{asset.amount}</div>
              <div className="text-right">{asset.value}</div>
              <div className="text-right">
                <Badge
                  variant={
                    asset.changeType === "positive"
                      ? "default"
                      : asset.changeType === "negative"
                        ? "destructive"
                        : "outline"
                  }
                >
                  {asset.change}
                </Badge>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="ghost" size="icon" onClick={(e) => e.stopPropagation()}>
                  <Send className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={(e) => e.stopPropagation()}>
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Expandable details section */}
          <AnimatePresence>
            {expandedAsset === asset.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <Card className="mt-1 bg-muted/50 border-dashed">
                  <div className="p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <div className="text-sm font-medium">Network</div>
                        <div className="text-sm text-muted-foreground">Ethereum Mainnet</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium">Contract</div>
                        <div className="text-sm text-muted-foreground truncate max-w-[150px]">0x1a2b...3c4d</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium">Last Transaction</div>
                        <div className="text-sm text-muted-foreground">2 days ago</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium">Market Cap</div>
                        <div className="text-sm text-muted-foreground">$215.6B</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

