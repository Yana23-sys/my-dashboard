import Image from "next/image";

import { MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const products = [
    {
        id: 1,
        name: "Laser Lemonade Machine",
        status: "Active",
        price: "$499.99",
        totalSales: 25,
        createdAt: "2023-07-12 10:42 AM",
    },
    {
        id: 2,
        name: "Hypernova Headphones",
        status: "Active",
        price: "$320.99",
        totalSales: 100,
        createdAt: "2023-07-12 10:42 AM",
    },
    {
        id: 3,
        name: "AeroGlow Desk Lamp",
        status: "Active",
        price: "$47.99",
        totalSales: 40,
        createdAt: "2024-12-01 05:02 PM",
    },
    {
        id: 4,
        name: "TechTonic Energy Drink",
        status: "Active",
        price: "$39.99",
        totalSales: 52,
        createdAt: "2024-01-01 08:12 AM",
    },  
    {
        id: 5,
        name: "Gamer Gear Pro Controller",
        status: "Active",
        price: "$39.99",
        totalSales: 19,
        createdAt: "2024-02-14 10:42 AM",
    }
  ]

export default function ProductList() {
    return (
        <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="hidden w-[100px] sm:table-cell">
              <span className="sr-only">Image</span>
            </TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="hidden md:table-cell">
              Total Sales
            </TableHead>
            <TableHead className="hidden md:table-cell">
              Created at
            </TableHead>
            <TableHead>
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {products.map((product) => (

          <TableRow key={product.id}>
            <TableCell className="hidden sm:table-cell">
              <Image
                alt="Product image"
                className="aspect-square rounded-md object-cover"
                height="64"
                src="/placeholder-product.svg"
                width="64"
              />
            </TableCell>
            <TableCell className="font-medium">
              {product.name}
            </TableCell>
            <TableCell>
              <Badge variant="outline">{product.status}</Badge>
            </TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell className="hidden md:table-cell">{product.totalSales}</TableCell>
            <TableCell className="hidden md:table-cell">
              {product.createdAt}
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    aria-haspopup="true"
                    size="icon"
                    variant="ghost"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
          ))}

        </TableBody>
      </Table>
    )
}