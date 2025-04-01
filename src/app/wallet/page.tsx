import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  ArrowUpRight,
  BarChart3,
  Clock,
  CreditCard,
  DollarSign,
  LayoutDashboard,
  Plus,
  Send,
  Settings,
  Wallet,
} from "lucide-react"
import { PageTransition } from "@/components/page-transactions"
import { WalletAssets } from "@/components/wallet-aseets"
import { TransactionHistory } from "@/components/transition-history"


export default function WalletPage() {
  return (
    <PageTransition>
      <div className="grid flex-1 md:grid-cols-[220px_1fr]">
        <div className="hidden border-r bg-muted/40 md:block">
          <div className="flex h-full flex-col gap-2 p-4">
            <Link
              href="/"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <LayoutDashboard className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="/wallet"
              className="flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-primary-foreground"
            >
              <Wallet className="h-5 w-5" />
              Wallet
            </Link>
            <Link
              href="/transactions"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <CreditCard className="h-5 w-5" />
              Transactions
            </Link>
            <Link
              href="/analytics"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <BarChart3 className="h-5 w-5" />
              Analytics
            </Link>
            <Link
              href="/settings"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <Settings className="h-5 w-5" />
              Settings
            </Link>
          </div>
        </div>
        <main className="flex flex-col gap-6 p-4 md:gap-8 md:p-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tight">Wallet</h1>
            <p className="text-muted-foreground">Manage your crypto assets and transactions.</p>
          </div>

          <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Assets</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">Across 5 blockchains</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">NFTs</CardTitle>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">3 new this month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Staking Rewards</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1,245.32</div>
                <p className="text-xs text-muted-foreground">+5.2% APY</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button className="gap-2">
              <Send className="h-4 w-4" />
              Send
            </Button>
            <Button variant="outline" className="gap-2">
              <Plus className="h-4 w-4" />
              Receive
            </Button>
            <Button variant="outline" className="gap-2">
              <ArrowUpRight className="h-4 w-4" />
              Swap
            </Button>
            <Button variant="outline" className="gap-2">
              <DollarSign className="h-4 w-4" />
              Buy
            </Button>
          </div>

          <Tabs defaultValue="assets" className="space-y-4">
            <TabsList className="w-full overflow-x-auto flex-nowrap justify-start md:justify-center">
              <TabsTrigger value="assets">Assets</TabsTrigger>
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
              <TabsTrigger value="nfts">NFTs</TabsTrigger>
            </TabsList>
            <TabsContent value="assets" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Your Assets</CardTitle>
                  <CardDescription>View and manage your cryptocurrency assets</CardDescription>
                </CardHeader>
                <CardContent>
                  <WalletAssets />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="transactions" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Transaction History</CardTitle>
                  <CardDescription>Your recent wallet transactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <TransactionHistory extended={true} />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="nfts" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>NFT Collection</CardTitle>
                  <CardDescription>Your non-fungible token collection</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} className="rounded-lg overflow-hidden border bg-card">
                        <div className="aspect-square bg-muted relative">
                          <img
                            src={`/placeholder.svg?height=200&width=200&text=NFT ${i + 1}`}
                            alt={`NFT ${i + 1}`}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="p-3">
                          <h3 className="font-medium text-sm">CryptoArt #{i + 1}</h3>
                          <p className="text-xs text-muted-foreground">Collection Name</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </PageTransition>
  )
}

