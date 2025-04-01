"use client"; // Ensures this is a Client Component

import { usePathname } from "next/navigation"; // Correct hook for App Router
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight, Clock, CreditCard, DollarSign, LayoutDashboard, Wallet, BarChart3, Settings } from "lucide-react";
import { BlockchainStats } from "@/components/blockchain-stats";
import { RecentBlocks } from "@/components/recent-blocks";
import { TransactionHistory } from "@/components/transition-history"; // Assuming typo for "transaction-history"
import { PageTransition } from "@/components/page-transactions"; // Assuming typo for "page-transition"
import Link from "next/link";

export default function Home() {
  const pathname = usePathname(); // Get the current pathname

  return (
    <PageTransition>
      <div className="flex min-h-screen">
        {/* Sidebar Navigation */}
        <div className="flex h-full flex-col gap-2 p-4 border-r">
          <Link
            href="/dashboard"
            className={`flex items-center gap-2 rounded-lg px-3 py-2 ${
              pathname === "/dashboard"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <LayoutDashboard className="h-5 w-5" />
            Dashboard
          </Link>
          <Link
            href="/wallet"
            className={`flex items-center gap-2 rounded-lg px-3 py-2 ${
              pathname === "/wallet"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Wallet className="h-5 w-5" />
            Wallet
          </Link>
          <Link
            href="/transactions"
            className={`flex items-center gap-2 rounded-lg px-3 py-2 ${
              pathname === "/transactions"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <CreditCard className="h-5 w-5" />
            Transactions
          </Link>
          <Link
            href="/analytics"
            className={`flex items-center gap-2 rounded-lg px-3 py-2 ${
              pathname === "/analytics"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <BarChart3 className="h-5 w-5" />
            Analytics
          </Link>
          <Link
            href="/settings"
            className={`flex items-center gap-2 rounded-lg px-3 py-2 ${
              pathname === "/settings"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Settings className="h-5 w-5" />
            Settings
          </Link>
        </div>

        {/* Main Content */}
        <main className="flex-1 flex flex-col gap-6 p-4 md:gap-8 md:p-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Overview of your blockchain activity and statistics.</p>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="w-full overflow-x-auto flex-nowrap justify-start md:justify-center">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
              <TabsTrigger value="blocks">Blocks</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
                    <CardTitle className="text-sm font-medium">Transactions</CardTitle>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+573</div>
                    <p className="text-xs text-muted-foreground">+201 since last week</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Gas Price</CardTitle>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">32 Gwei</div>
                    <p className="text-xs text-muted-foreground">-3% from average</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Time</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+573 days</div>
                    <p className="text-xs text-muted-foreground">Since first transaction</p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-full lg:col-span-4">
                  <CardHeader>
                    <CardTitle>Transaction History</CardTitle>
                    <CardDescription>Your recent blockchain transactions</CardDescription>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <TransactionHistory />
                  </CardContent>
                </Card>
                <Card className="col-span-full lg:col-span-3">
                  <CardHeader>
                    <CardTitle>Blockchain Stats</CardTitle>
                    <CardDescription>Network statistics and metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BlockchainStats />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="transactions" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>All Transactions</CardTitle>
                  <CardDescription>View and manage all your blockchain transactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <TransactionHistory extended={true} />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="blocks" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Blocks</CardTitle>
                  <CardDescription>Latest blocks added to the blockchain</CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentBlocks />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </PageTransition>
  );
}