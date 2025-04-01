import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BarChart3,
  CreditCard,
  Globe,
  Key,
  Layers,
  LayoutDashboard,
  Lock,
  Settings,
  Shield,
  Wallet,
} from "lucide-react"
import { WalletConnect } from "@/components/wallet-connect"
import { ThemeToggle } from "@/components/theme-toggle"
import { ThemeSelector } from "@/components/theme-selector"
import { PageTransition } from "@/components/page-transactions"

export default function SettingsPage() {
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
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <BarChart3 className="h-5 w-5" />
                Analytics
              </Link>
              <Link
                href="/settings"
                className="flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-primary-foreground"
              >
                <Settings className="h-5 w-5" />
                Settings
              </Link>
            </div>
          </div>
          <main className="flex flex-col gap-6 p-4 md:gap-8 md:p-8">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
              <p className="text-muted-foreground">Manage your account preferences and application settings.</p>
            </div>

            <Tabs defaultValue="account" className="space-y-4">
              <TabsList className="grid grid-cols-4 md:w-[600px]">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="appearance">Appearance</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
              </TabsList>

              <TabsContent value="account" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Information</CardTitle>
                    <CardDescription>Update your account details and preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" defaultValue="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Your email" defaultValue="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="language">Language</Label>
                      <Select defaultValue="en">
                        <SelectTrigger id="language">
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="km">ភាសាខ្មែរ (Khmer)</SelectItem>
                          <SelectItem value="zh">中文 (Chinese)</SelectItem>
                          <SelectItem value="ja">日本語 (Japanese)</SelectItem>
                          <SelectItem value="ko">한국어 (Korean)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="currency">Currency</Label>
                      <Select defaultValue="usd">
                        <SelectTrigger id="currency">
                          <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="usd">USD ($)</SelectItem>
                          <SelectItem value="khr">KHR (៛)</SelectItem>
                          <SelectItem value="eur">EUR (€)</SelectItem>
                          <SelectItem value="gbp">GBP (£)</SelectItem>
                          <SelectItem value="jpy">JPY (¥)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timezone">Timezone</Label>
                      <Select defaultValue="asia_phnom_penh">
                        <SelectTrigger id="timezone">
                          <SelectValue placeholder="Select timezone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asia_phnom_penh">Asia/Phnom_Penh (UTC+7)</SelectItem>
                          <SelectItem value="utc">UTC</SelectItem>
                          <SelectItem value="america_new_york">America/New_York (UTC-5)</SelectItem>
                          <SelectItem value="europe_london">Europe/London (UTC+0)</SelectItem>
                          <SelectItem value="asia_tokyo">Asia/Tokyo (UTC+9)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button>Save Changes</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Connected Accounts</CardTitle>
                    <CardDescription>Manage your connected accounts and services</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Globe className="h-5 w-5" />
                        <div>
                          <p className="font-medium">Bakong CBDC</p>
                          <p className="text-sm text-muted-foreground">Cambodia's central bank digital currency</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Connect
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Globe className="h-5 w-5" />
                        <div>
                          <p className="font-medium">KhmerPay</p>
                          <p className="text-sm text-muted-foreground">Local payment processor</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Connect
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Globe className="h-5 w-5" />
                        <div>
                          <p className="font-medium">CambodiaTech</p>
                          <p className="text-sm text-muted-foreground">Blockchain development platform</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Connect
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="appearance" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Theme Settings</CardTitle>
                    <CardDescription>Customize the appearance of the application</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="dark-mode">Dark Mode</Label>
                          <p className="text-sm text-muted-foreground">Toggle between light and dark mode</p>
                        </div>
                        <ThemeToggle />
                      </div>

                      <div className="space-y-2">
                        <Label>Theme Color</Label>
                        <ThemeSelector />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="animations">Animations</Label>
                          <p className="text-sm text-muted-foreground">Enable or disable UI animations</p>
                        </div>
                        <Switch id="animations" defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="compact-mode">Compact Mode</Label>
                          <p className="text-sm text-muted-foreground">Use a more compact user interface</p>
                        </div>
                        <Switch id="compact-mode" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="font-size">Font Size</Label>
                        <Select defaultValue="medium">
                          <SelectTrigger id="font-size">
                            <SelectValue placeholder="Select font size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">Small</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="large">Large</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Cambodia Theme</CardTitle>
                    <CardDescription>Special themes inspired by Cambodia</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="border rounded-lg p-4 cursor-pointer hover:border-primary">
                        <div className="h-20 bg-[#032588] rounded-md mb-2"></div>
                        <p className="font-medium text-sm">Angkor Wat</p>
                        <p className="text-xs text-muted-foreground">Inspired by Cambodia's iconic temple</p>
                      </div>
                      <div className="border rounded-lg p-4 cursor-pointer hover:border-primary">
                        <div className="h-20 bg-[#e8505b] rounded-md mb-2"></div>
                        <p className="font-medium text-sm">Cambodian Flag</p>
                        <p className="text-xs text-muted-foreground">Based on the national flag colors</p>
                      </div>
                      <div className="border rounded-lg p-4 cursor-pointer hover:border-primary">
                        <div className="h-20 bg-[#00a19a] rounded-md mb-2"></div>
                        <p className="font-medium text-sm">Mekong River</p>
                        <p className="text-xs text-muted-foreground">Inspired by Cambodia's waterways</p>
                      </div>
                      <div className="border rounded-lg p-4 cursor-pointer hover:border-primary">
                        <div className="h-20 bg-[#f7b538] rounded-md mb-2"></div>
                        <p className="font-medium text-sm">Khmer Gold</p>
                        <p className="text-xs text-muted-foreground">Traditional Cambodian gold color</p>
                      </div>
                      <div className="border rounded-lg p-4 cursor-pointer hover:border-primary">
                        <div className="h-20 bg-[#7b2cbf] rounded-md mb-2"></div>
                        <p className="font-medium text-sm">Royal Purple</p>
                        <p className="text-xs text-muted-foreground">Inspired by royal Cambodian textiles</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Security Settings</CardTitle>
                    <CardDescription>Manage your security preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                    <Button>Update Password</Button>

                    <div className="pt-4 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="2fa">Two-Factor Authentication</Label>
                          <p className="text-sm text-muted-foreground">
                            Add an extra layer of security to your account
                          </p>
                        </div>
                        <Switch id="2fa" />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="biometric">Biometric Authentication</Label>
                          <p className="text-sm text-muted-foreground">Use fingerprint or face recognition to unlock</p>
                        </div>
                        <Switch id="biometric" defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="auto-lock">Auto-Lock</Label>
                          <p className="text-sm text-muted-foreground">
                            Automatically lock after 5 minutes of inactivity
                          </p>
                        </div>
                        <Switch id="auto-lock" defaultChecked />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recovery Options</CardTitle>
                    <CardDescription>Set up recovery methods for your account</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Key className="h-5 w-5" />
                        <div>
                          <p className="font-medium">Recovery Phrase</p>
                          <p className="text-sm text-muted-foreground">12-word seed phrase for wallet recovery</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Lock className="h-5 w-5" />
                        <div>
                          <p className="font-medium">Private Keys</p>
                          <p className="text-sm text-muted-foreground">Export encrypted private keys</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Export
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Shield className="h-5 w-5" />
                        <div>
                          <p className="font-medium">Hardware Wallet</p>
                          <p className="text-sm text-muted-foreground">Connect a hardware wallet for extra security</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Connect
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notifications" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>Manage how you receive notifications</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="email-notifications">Email Notifications</Label>
                        <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                      </div>
                      <Switch id="email-notifications" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="push-notifications">Push Notifications</Label>
                        <p className="text-sm text-muted-foreground">Receive notifications on your device</p>
                      </div>
                      <Switch id="push-notifications" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="transaction-alerts">Transaction Alerts</Label>
                        <p className="text-sm text-muted-foreground">Get notified about your transactions</p>
                      </div>
                      <Switch id="transaction-alerts" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="price-alerts">Price Alerts</Label>
                        <p className="text-sm text-muted-foreground">Get notified about significant price changes</p>
                      </div>
                      <Switch id="price-alerts" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="security-alerts">Security Alerts</Label>
                        <p className="text-sm text-muted-foreground">Get notified about security-related events</p>
                      </div>
                      <Switch id="security-alerts" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="marketing">Marketing Communications</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive updates about new features and promotions
                        </p>
                      </div>
                      <Switch id="marketing" />
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

