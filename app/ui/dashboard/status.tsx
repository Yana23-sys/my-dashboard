import { TabsList, TabsTrigger } from "@/components/ui/tabs";


export default function StatusSelect() {
    return (
        <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="draft">Draft</TabsTrigger>
              <TabsTrigger value="archived" className="hidden sm:flex">
                Archived
              </TabsTrigger>
        </TabsList>
    )
}