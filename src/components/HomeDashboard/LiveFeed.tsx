import { RadioIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

export default function LiveFeed() {
  return (
    <>
      <Card className="h-[40rem] xl:h-auto xl:row-span-4 xl:col-span-1 overflow-auto flex flex-col">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Live Feed{" "}
            <RadioIcon className="w-4 h-4 animate-pulse text-destructive" />
          </CardTitle>
          <CardDescription>
            See realtime data from multiple channels
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col flex-grow gap-2 overflow-y-auto">
          <FeedCard
            title="@ShadCn"
            description="Twitter"
            content="Let's talk about Y Combinator funding and how it works"
          />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant={"outline"}>Filter</Button>
          <Button variant={"default"}>Detailed</Button>
        </CardFooter>
      </Card>
    </>
  );
}

const FeedCard = ({
  title,
  description,
  content,
}: {
  title: string;
  description: string;
  content: string;
}) => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="">{content}</CardContent>
        <CardFooter className="justify-between">
          <Button variant={"outline"}>View</Button>
          <Button variant={"default"}>Respond</Button>
        </CardFooter>
      </Card>
    </>
  );
};
