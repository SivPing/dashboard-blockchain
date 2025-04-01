"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { CuboidIcon as Cube } from "lucide-react"

interface Block {
  height: number
  hash: string
  transactions: number
  timestamp: string
  size: string
}

// Extended blocks data for pagination demo
const blocks: Block[] = [
  {
    height: 824593,
    hash: "0x1a2b3c4d5e6f7g8h9i0j",
    transactions: 2453,
    timestamp: "2 mins ago",
    size: "1.2 MB",
  },
  {
    height: 824592,
    hash: "0x2b3c4d5e6f7g8h9i0j1a",
    transactions: 1892,
    timestamp: "4 mins ago",
    size: "1.1 MB",
  },
  {
    height: 824591,
    hash: "0x3c4d5e6f7g8h9i0j1a2b",
    transactions: 2105,
    timestamp: "6 mins ago",
    size: "1.3 MB",
  },
  {
    height: 824590,
    hash: "0x4d5e6f7g8h9i0j1a2b3c",
    transactions: 1756,
    timestamp: "8 mins ago",
    size: "0.9 MB",
  },
  {
    height: 824589,
    hash: "0x5e6f7g8h9i0j1a2b3c4d",
    transactions: 2301,
    timestamp: "10 mins ago",
    size: "1.4 MB",
  },
  {
    height: 824588,
    hash: "0x6f7g8h9i0j1a2b3c4d5e",
    transactions: 1987,
    timestamp: "12 mins ago",
    size: "1.0 MB",
  },
  {
    height: 824587,
    hash: "0x7g8h9i0j1a2b3c4d5e6f",
    transactions: 2211,
    timestamp: "14 mins ago",
    size: "1.2 MB",
  },
  {
    height: 824586,
    hash: "0x8h9i0j1a2b3c4d5e6f7g",
    transactions: 1845,
    timestamp: "16 mins ago",
    size: "1.1 MB",
  },
  {
    height: 824585,
    hash: "0x9i0j1a2b3c4d5e6f7g8h",
    transactions: 2056,
    timestamp: "18 mins ago",
    size: "1.3 MB",
  },
  {
    height: 824584,
    hash: "0x0j1a2b3c4d5e6f7g8h9i",
    transactions: 1932,
    timestamp: "20 mins ago",
    size: "1.2 MB",
  },
  {
    height: 824583,
    hash: "0xj1a2b3c4d5e6f7g8h9i0",
    transactions: 2145,
    timestamp: "22 mins ago",
    size: "1.3 MB",
  },
  {
    height: 824582,
    hash: "0xa2b3c4d5e6f7g8h9i0j1",
    transactions: 1876,
    timestamp: "24 mins ago",
    size: "1.0 MB",
  },
  {
    height: 824581,
    hash: "0xb3c4d5e6f7g8h9i0j1a2",
    transactions: 2234,
    timestamp: "26 mins ago",
    size: "1.4 MB",
  },
  {
    height: 824580,
    hash: "0xc4d5e6f7g8h9i0j1a2b3",
    transactions: 1965,
    timestamp: "28 mins ago",
    size: "1.2 MB",
  },
  {
    height: 824579,
    hash: "0xd5e6f7g8h9i0j1a2b3c4",
    transactions: 2087,
    timestamp: "30 mins ago",
    size: "1.3 MB",
  },
]

export function RecentBlocks() {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)

  // Calculate total pages
  const totalItems = blocks.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  // Get current blocks
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentBlocks = blocks.slice(indexOfFirstItem, indexOfLastItem)

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
            <TableHead>Height</TableHead>
            <TableHead className="hidden md:table-cell">Hash</TableHead>
            <TableHead>Txs</TableHead>
            <TableHead className="hidden md:table-cell">Time</TableHead>
            <TableHead>Size</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentBlocks.map((block) => (
            <TableRow key={block.height}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Cube className="h-4 w-4 text-primary" />
                  <span>{block.height}</span>
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell font-mono text-xs">
                {block.hash.substring(0, 6) + "..." + block.hash.substring(block.hash.length - 4)}
              </TableCell>
              <TableCell>
                <Badge variant="secondary">{block.transactions}</Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">{block.timestamp}</TableCell>
              <TableCell>{block.size}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <p className="text-sm text-muted-foreground">Blocks per page</p>
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

