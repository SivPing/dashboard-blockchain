"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { ArrowDownLeft, ArrowUpRight, ExternalLink } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination"

interface Transaction {
  id: string
  type: "send" | "receive"
  amount: string
  token: string
  address: string
  timestamp: string
  status: "confirmed" | "pending" | "failed"
}

// Extended transaction data for pagination demo
const transactions: Transaction[] = [
  {
    id: "0x1a2b3c4d5e6f7g8h9i0j",
    type: "send",
    amount: "0.245",
    token: "ETH",
    address: "0xd8dA...4Dd5",
    timestamp: "2 hours ago",
    status: "confirmed",
  },
  {
    id: "0x2b3c4d5e6f7g8h9i0j1a",
    type: "receive",
    amount: "125",
    token: "USDT",
    address: "0xa1b2...3c4d",
    timestamp: "5 hours ago",
    status: "confirmed",
  },
  {
    id: "0x3c4d5e6f7g8h9i0j1a2b",
    type: "send",
    amount: "1.5",
    token: "ETH",
    address: "0xe5f6...7g8h",
    timestamp: "1 day ago",
    status: "confirmed",
  },
  {
    id: "0x4d5e6f7g8h9i0j1a2b3c",
    type: "receive",
    amount: "500",
    token: "USDC",
    address: "0xi9j0...k1l2",
    timestamp: "2 days ago",
    status: "confirmed",
  },
  {
    id: "0x5e6f7g8h9i0j1a2b3c4d",
    type: "send",
    amount: "0.075",
    token: "ETH",
    address: "0xm3n4...o5p6",
    timestamp: "3 days ago",
    status: "failed",
  },
  {
    id: "0x6f7g8h9i0j1a2b3c4d5e",
    type: "send",
    amount: "50",
    token: "LINK",
    address: "0xq7r8...s9t0",
    timestamp: "4 days ago",
    status: "pending",
  },
  {
    id: "0x7g8h9i0j1a2b3c4d5e6f",
    type: "receive",
    amount: "0.35",
    token: "ETH",
    address: "0xu1v2...w3x4",
    timestamp: "5 days ago",
    status: "confirmed",
  },
  {
    id: "0x8h9i0j1a2b3c4d5e6f7g",
    type: "send",
    amount: "200",
    token: "USDC",
    address: "0xy5z6...a7b8",
    timestamp: "6 days ago",
    status: "confirmed",
  },
  {
    id: "0x9i0j1a2b3c4d5e6f7g8h",
    type: "receive",
    amount: "0.12",
    token: "ETH",
    address: "0xc9d0...e1f2",
    timestamp: "1 week ago",
    status: "confirmed",
  },
  {
    id: "0x0j1a2b3c4d5e6f7g8h9i",
    type: "send",
    amount: "75",
    token: "LINK",
    address: "0xg3h4...i5j6",
    timestamp: "1 week ago",
    status: "confirmed",
  },
  {
    id: "0xj1a2b3c4d5e6f7g8h9i0",
    type: "receive",
    amount: "1000",
    token: "USDT",
    address: "0xk7l8...m9n0",
    timestamp: "2 weeks ago",
    status: "confirmed",
  },
  {
    id: "0xa2b3c4d5e6f7g8h9i0j1",
    type: "send",
    amount: "0.5",
    token: "ETH",
    address: "0xo1p2...q3r4",
    timestamp: "2 weeks ago",
    status: "confirmed",
  },
  {
    id: "0xb3c4d5e6f7g8h9i0j1a2",
    type: "receive",
    amount: "250",
    token: "USDC",
    address: "0xs5t6...u7v8",
    timestamp: "3 weeks ago",
    status: "confirmed",
  },
  {
    id: "0xc4d5e6f7g8h9i0j1a2b3",
    type: "send",
    amount: "0.33",
    token: "ETH",
    address: "0xw9x0...y1z2",
    timestamp: "3 weeks ago",
    status: "confirmed",
  },
  {
    id: "0xd5e6f7g8h9i0j1a2b3c4",
    type: "receive",
    amount: "100",
    token: "LINK",
    address: "0xa3b4...c5d6",
    timestamp: "1 month ago",
    status: "confirmed",
  },
]

interface TransactionHistoryProps {
  extended?: boolean
}

export function TransactionHistory({ extended = false }: TransactionHistoryProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)

  // Calculate total pages
  const totalItems = extended ? transactions.length : Math.min(transactions.length, 12)
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  // Get current transactions
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentTransactions = transactions.slice(indexOfFirstItem, indexOfLastItem)

  // Change page
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  // Handle items per page change
  const handleItemsPerPageChange = (value: string) => {
    setItemsPerPage(Number.parseInt(value))
    setCurrentPage(1) // Reset to first page when changing items per page
  }

  // Generate page numbers
  const pageNumbers: number[] = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  // Determine which page numbers to show
  const getVisiblePageNumbers = () => {
    if (totalPages <= 5) {
      return pageNumbers
    }

    if (currentPage <= 3) {
      return [1, 2, 3, 4, 5]
    }

    if (currentPage >= totalPages - 2) {
      return [totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
    }

    return [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2]
  }

  const visiblePageNumbers = getVisiblePageNumbers()

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead className="hidden md:table-cell">Address</TableHead>
            <TableHead className="hidden md:table-cell">Time</TableHead>
            <TableHead>Status</TableHead>
            {extended && <TableHead className="text-right">Action</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentTransactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className={`rounded-full p-2 ${transaction.type === "send" ? "bg-red-100" : "bg-green-100"}`}>
                    {transaction.type === "send" ? (
                      <ArrowUpRight className="h-4 w-4 text-red-500" />
                    ) : (
                      <ArrowDownLeft className="h-4 w-4 text-green-500" />
                    )}
                  </div>
                  <span className="hidden md:inline">{transaction.type === "send" ? "Sent" : "Received"}</span>
                </div>
              </TableCell>
              <TableCell className="font-medium">
                {transaction.type === "send" ? "-" : "+"}
                {transaction.amount} {transaction.token}
              </TableCell>
              <TableCell className="hidden md:table-cell">{transaction.address}</TableCell>
              <TableCell className="hidden md:table-cell">{transaction.timestamp}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    transaction.status === "confirmed"
                      ? "default"
                      : transaction.status === "pending"
                        ? "outline"
                        : "destructive"
                  }
                >
                  {transaction.status}
                </Badge>
              </TableCell>
              {extended && (
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <p className="text-sm text-muted-foreground">Rows per page</p>
          <Select value={itemsPerPage.toString()} onValueChange={handleItemsPerPageChange}>
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={itemsPerPage.toString()} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="15">15</SelectItem>
              <SelectItem value="20">20</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  if (currentPage > 1) handlePageChange(currentPage - 1)
                }}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>

            {visiblePageNumbers[0] > 1 && (
              <>
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      handlePageChange(1)
                    }}
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                {visiblePageNumbers[0] > 2 && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}
              </>
            )}

            {visiblePageNumbers.map((number) => (
              <PaginationItem key={number}>
                <PaginationLink
                  href="#"
                  isActive={currentPage === number}
                  onClick={(e) => {
                    e.preventDefault()
                    handlePageChange(number)
                  }}
                >
                  {number}
                </PaginationLink>
              </PaginationItem>
            ))}

            {visiblePageNumbers[visiblePageNumbers.length - 1] < totalPages && (
              <>
                {visiblePageNumbers[visiblePageNumbers.length - 1] < totalPages - 1 && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      handlePageChange(totalPages)
                    }}
                  >
                    {totalPages}
                  </PaginationLink>
                </PaginationItem>
              </>
            )}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  if (currentPage < totalPages) handlePageChange(currentPage + 1)
                }}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}

