import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export function CardWrapper() {
    const fetchedData = [
        {
            period: "week",
            amount: "1,329",
            ratio: "25",
        },
        {
            period: "month",
            amount: "5,329",
            ratio: "50",
        }
    ]

    return (
        <>
            <IntroductionCard />
            <AnalyticsCard period={fetchedData[0].period} amount={fetchedData[0].amount} ratio={fetchedData[0].ratio} />
            <AnalyticsCard period={fetchedData[1].period} amount={fetchedData[1].amount} ratio={fetchedData[1].ratio} />
        </>
    )
}

export function IntroductionCard() {
    return (
        <Card
        className="sm:col-span-2" x-chunk="dashboard-05-chunk-0"
        >
        <CardHeader className="pb-3">
            <CardTitle>Your Orders</CardTitle>
            <CardDescription className="text-balance max-w-lg leading-relaxed">
            Introducing Our Dynamic Orders Dashboard for Seamless
            Management and Insightful Analysis.
            </CardDescription>
        </CardHeader>
        <CardFooter>
            <Button>Create New Order</Button>
        </CardFooter>
        </Card>
    )
}

export function AnalyticsCard({
    period, 
    amount, 
    ratio
}: {
    period: string, 
    amount: number | string, 
    ratio: number | string
}) {

    return (
        <Card x-chunk="dashboard-05-chunk-1">
            <CardHeader className="pb-2">
                <CardDescription>This {period[0].toUpperCase() + period.slice(1)}</CardDescription>
                <CardTitle className="text-4xl">${amount}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-xs text-muted-foreground">
                {Math.sign(Number(ratio)) > 0 ? "+" : "-"}{Math.abs(Number(ratio))} from last {period}
                </div>
            </CardContent>
            <CardFooter>
                <Progress value={Number(ratio)} aria-label={`${ratio} {Math.sign(Number(ratio)) > 0 ? "increased" : "decreased"}`} />
            </CardFooter>
        </Card>
    )
}