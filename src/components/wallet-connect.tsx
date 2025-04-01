"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Button } from "./ui/button"
import { Wallet } from "lucide-react"

export function WalletConnect() {
  const [isConnected, setIsConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")

  const handleConnect = () => {
    setWalletAddress("0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045")
    setIsConnected(true)
  }

  const handleDisconnect = () => {
    setWalletAddress("")
    setIsConnected(false)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Wallet className="h-4 w-4" />
          {isConnected
            ? walletAddress.substring(0, 6) + "..." + walletAddress.substring(walletAddress.length - 4)
            : "Connect Wallet"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{isConnected ? "Wallet Connected" : "Connect Wallet"}</DialogTitle>
          <DialogDescription>
            {isConnected
              ? "Your wallet is connected to the blockchain network."
              : "Connect your wallet to interact with the blockchain."}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          {isConnected ? (
            <div className="flex flex-col gap-2 rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Address</span>
                <span className="text-xs text-muted-foreground">Ethereum</span>
              </div>
              <code className="rounded bg-muted px-2 py-1 text-sm">{walletAddress}</code>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Balance</span>
                <span className="text-sm">3.45 ETH</span>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="flex flex-col h-24 items-center justify-center gap-2">
                <img src="/placeholder.svg?height=32&width=32" alt="MetaMask" className="h-8 w-8" />
                <span>MetaMask</span>
              </Button>
              <Button variant="outline" className="flex flex-col h-24 items-center justify-center gap-2">
                <img src="/placeholder.svg?height=32&width=32" alt="WalletConnect" className="h-8 w-8" />
                <span>WalletConnect</span>
              </Button>
              <Button variant="outline" className="flex flex-col h-24 items-center justify-center gap-2">
                <img src="/placeholder.svg?height=32&width=32" alt="Coinbase" className="h-8 w-8" />
                <span>Coinbase</span>
              </Button>
              <Button variant="outline" className="flex flex-col h-24 items-center justify-center gap-2">
                <img src="/placeholder.svg?height=32&width=32" alt="Trust Wallet" className="h-8 w-8" />
                <span>Trust Wallet</span>
              </Button>
            </div>
          )}
        </div>
        <DialogFooter className="sm:justify-start">
          {isConnected ? (
            <Button variant="destructive" onClick={handleDisconnect}>
              Disconnect
            </Button>
          ) : (
            <Button onClick={handleConnect}>Connect</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

