import FilterDropdown from "@/app/ui/dashboard/filter";
import ProductsList from "@/app/ui/dashboard/list";
import StatusSelect from "@/app/ui/dashboard/status";

import { File, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent } from "@/components/ui/tabs";

export default function Dashboard() {
  return (
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">

        <Tabs defaultValue="all">
          <div className="flex items-center">

            <StatusSelect />

            <div className="ml-auto flex items-center gap-2">
              
              <FilterDropdown />

              <Button size="sm" variant="outline" className="h-7 gap-1">
                <File className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Export
                </span>
              </Button>

              <Button size="sm" className="h-7 gap-1">
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Add Product
                </span>
              </Button>
            </div>
          </div>

          <TabsContent value="all">

            <Card x-chunk="dashboard-06-chunk-0">
              <CardHeader>
                <CardTitle>Products</CardTitle>
                <CardDescription>
                  Manage your products and view their sales performance.
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ProductsList />
              </CardContent>
              
              <CardFooter>
                {/* Pagination */}
                <div className="text-xs text-muted-foreground">
                  Showing <strong>1-10</strong> of <strong>32</strong> products
                </div>
              </CardFooter>

            </Card>
          </TabsContent>
        </Tabs>
      </main>
  );
}
