"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { LayoutDashboard, Wallet, CreditCard, BarChart3, Settings } from "lucide-react"

export default function Sidebar() {
  const pathname = usePathname()

  // Debug the pathname to see what route we're on
  console.log("Current pathname:", pathname)

  // Function to determine active link styling
  const isActive = (href: string) => {
    // Normalize the comparison by ensuring trailing slashes don't affect the match
    const normalizedPathname = pathname.endsWith("/") ? pathname : `${pathname}/`
    const normalizedHref = href.endsWith("/") ? href : `${href}/`

    // Check if the current pathname matches the href
    const active = normalizedPathname === normalizedHref
    console.log(`Checking if ${normalizedPathname} matches ${normalizedHref}: ${active}`)

    return active
      ? "bg-primary text-primary-foreground rounded-lg px-3 py-2"
      : "text-muted-foreground hover:text-foreground rounded-lg px-3 py-2"
  }

  return (
    <aside className="hidden md:block border-r bg-muted/40 w-64">
      <div className="flex h-full flex-col gap-2 p-4">
        <Link href="/" className={`flex items-center gap-2 ${isActive("/")}`}>
          <LayoutDashboard className="h-5 w-5" />
          Dashboard
        </Link>
        <Link href="/wallet" className={`flex items-center gap-2 ${isActive("/wallet")}`}>
          <Wallet className="h-5 w-5" />
          Wallet
        </Link>
        <Link href="/transactions" className={`flex items-center gap-2 ${isActive("/transactions")}`}>
          <CreditCard className="h-5 w-5" />
          Transactions
        </Link>
        <Link href="/analytics" className={`flex items-center gap-2 ${isActive("/analytics")}`}>
          <BarChart3 className="h-5 w-5" />
          Analytics
        </Link>
        <Link href="/settings" className={`flex items-center gap-2 ${isActive("/settings")}`}>
          <Settings className="h-5 w-5" />
          Settings
        </Link>
      </div>
    </aside>
  )
}