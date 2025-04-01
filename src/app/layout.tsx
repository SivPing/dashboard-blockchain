import type React from "react"
import "@/app/globals.css"
import { Layers } from "lucide-react"
import Link from "next/link"
import { WalletConnect } from "@/components/wallet-connect"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeProvider } from "next-themes"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen w-full flex-col">
            <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <Layers className="h-6 w-6" />
                <span>BlockChain UI</span>
              </Link>
              <nav className="ml-auto flex gap-2 items-center">
                <ThemeToggle />
                <WalletConnect />
                <MobileNav />
              </nav>
            </header>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

