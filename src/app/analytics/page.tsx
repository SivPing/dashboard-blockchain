import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart3, CreditCard, LayoutDashboard, Settings, Wallet } from "lucide-react"
import { AnalyticsCharts } from "@/components/analytics-charts"
import { NetworkStats } from "@/components/network-stats"
import { PageTransition } from "@/components/page-transactions"

export default function AnalyticsPage() {
  return (
    <PageTransition>
      <div className="flex min-h-screen w-full flex-col">
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
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground"
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
                className="flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-primary-foreground"
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
              <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
              <p className="text-muted-foreground">Blockchain analytics and market insights.</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold">Market Overview</h2>
              </div>
              <Select defaultValue="7d">
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Time Period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="24h">24 hours</SelectItem>
                  <SelectItem value="7d">7 days</SelectItem>
                  <SelectItem value="30d">30 days</SelectItem>
                  <SelectItem value="90d">90 days</SelectItem>
                  <SelectItem value="1y">1 year</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Market Cap</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$1.24T</div>
                  <p className="text-xs text-muted-foreground">+2.5% from last week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">24h Volume</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$48.8B</div>
                  <p className="text-xs text-muted-foreground">+12.3% from yesterday</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">BTC Dominance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">42.3%</div>
                  <p className="text-xs text-muted-foreground">-0.8% from last week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Addresses</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1.2M</div>
                  <p className="text-xs text-muted-foreground">+5.4% from last week</p>
                </CardContent>
              </Card>
            </div>

            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Price Charts</CardTitle>
                <CardDescription>Cryptocurrency price movements over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[350px]">
                  <AnalyticsCharts />
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Cambodia Blockchain Adoption</CardTitle>
                  <CardDescription>Blockchain usage statistics in Cambodia</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-muted-foreground">Active Users</p>
                        <p className="text-2xl font-bold">24,500</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-muted-foreground">Transaction Volume</p>
                        <p className="text-2xl font-bold">$3.2M</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-muted-foreground">Projects</p>
                        <p className="text-2xl font-bold">42</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-muted-foreground">Growth Rate</p>
                        <p className="text-2xl font-bold">+18.5%</p>
                      </div>
                    </div>

                    <div className="rounded-lg border p-4">
                      <h3 className="font-medium mb-2">Top Blockchain Projects in Cambodia</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span>Bakong (NBC CBDC)</span>
                          <span className="font-medium">National</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Soramitsu Khmer</span>
                          <span className="font-medium">Finance</span>
                        </li>
                        <li className="flex justify-between">
                          <span>DApps Cambodia</span>
                          <span className="font-medium">Development</span>
                        </li>
                        <li className="flex justify-between">
                          <span>KhmerChain</span>
                          <span className="font-medium">Infrastructure</span>
                        </li>
                        <li className="flex justify-between">
                          <span>CambodiaTech</span>
                          <span className="font-medium">Education</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Network Statistics</CardTitle>
                  <CardDescription>Blockchain network performance metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <NetworkStats />
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="global" className="space-y-4">
              <TabsList>
                <TabsTrigger value="global">Global Trends</TabsTrigger>
                <TabsTrigger value="cambodia">Cambodia Focus</TabsTrigger>
                <TabsTrigger value="personal">Personal Analytics</TabsTrigger>
              </TabsList>
              <TabsContent value="global" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Global Blockchain Trends</CardTitle>
                    <CardDescription>Worldwide blockchain adoption and usage statistics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] bg-muted rounded-md flex items-center justify-center">
                      <p className="text-muted-foreground">Global trends chart will appear here</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="cambodia" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Cambodia Blockchain Ecosystem</CardTitle>
                    <CardDescription>Detailed analysis of blockchain adoption in Cambodia</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg border p-4">
                        <h3 className="font-medium mb-2">Bakong CBDC Impact</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          The National Bank of Cambodia&rsquo;s Bakong system is one of the world&rsquo;s first retail CBDCs,
                          facilitating over 6.8 million transactions worth more than $2.9 billion since its launch.
                        </p>
                        <div className="h-[150px] bg-muted rounded-md"></div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <h3 className="font-medium mb-2">Regulatory Framework</h3>
                        <p className="text-sm text-muted-foreground">
                          Cambodia is developing a comprehensive regulatory framework for cryptocurrencies and
                          blockchain technology, with a focus on promoting innovation while ensuring consumer protection
                          and financial stability.
                        </p>
                      </div>

                      <div className="rounded-lg border p-4">
                        <h3 className="font-medium mb-2">Adoption by Sector</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-medium">Finance</p>
                            <p className="text-muted-foreground">High adoption</p>
                          </div>
                          <div>
                            <p className="font-medium">Agriculture</p>
                            <p className="text-muted-foreground">Medium adoption</p>
                          </div>
                          <div>
                            <p className="font-medium">Real Estate</p>
                            <p className="text-muted-foreground">Growing adoption</p>
                          </div>
                          <div>
                            <p className="font-medium">Supply Chain</p>
                            <p className="text-muted-foreground">Medium adoption</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="personal" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Analytics</CardTitle>
                    <CardDescription>Personal blockchain usage and performance metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] bg-muted rounded-md flex items-center justify-center">
                      <p className="text-muted-foreground">Personal analytics will appear here</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </PageTransition>
  )
}

