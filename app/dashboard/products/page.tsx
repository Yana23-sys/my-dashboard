import FilterBar from "@/app/ui/dashboard/products/actions";
import ProductList from "@/app/ui/dashboard/products/list";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0">
        <FilterBar
          primaryFilterItems={[
            {
              value: "all",
              label: "All",
            },
            {
              value: "active",
              label: "Active",
            },
            {
              value: "inactive",
              label: "Inactive",
            },
            {
              value: "draft",
              label: "Draft",
            },
          ]}
          secondaryFilterItems={[]}
        />
          <Card x-chunk="dashboard-06-chunk-0">
            <CardHeader>
              <CardTitle>Products</CardTitle>
              <CardDescription>
                Manage your products and view their sales performance.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <ProductList />
            </CardContent>

            <CardFooter>
              {/* Pagination */}
              <div className="text-xs text-muted-foreground">
                Showing <strong>1-10</strong> of <strong>32</strong> products
              </div>
            </CardFooter>
          </Card>
    </main>
  );
}
