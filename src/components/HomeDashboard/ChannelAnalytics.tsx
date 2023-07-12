import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

export default function ChannelAnalytics() {
  return (
    <>
      <Card className="h-[20rem] xl:h-auto xl:row-span-2 xl:col-span-1 flex flex-col">
        <CardHeader>
          <CardTitle>Channel Analytics</CardTitle>
          <CardDescription>
            View the media response of your company
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow overflow-y-auto">
          <p>lorem1000</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Filter</Button>
          <Button>Detailed</Button>
        </CardFooter>
      </Card>
    </>
  );
}
