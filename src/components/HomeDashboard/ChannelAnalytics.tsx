import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { MailIcon } from "lucide-react";

const ChannelOptions = [
    {
        Icon: "",
        description: "",
        performance: ""
    }
]

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
          <ChannelCard />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Filter</Button>
          <Button>Detailed</Button>
        </CardFooter>
      </Card>
    </>
  );
}

const ChannelCard = () => {
    return (
      <>
        <Button className="justify-between w-full" variant={"outline"}>
          <MailIcon className="w-4 h-4 mr-2" /> Email <span className="text-destructive">34%</span>
        </Button>
      </>
    );
};
