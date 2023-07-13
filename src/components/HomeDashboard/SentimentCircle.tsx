import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function SentimentCircle() {
  return (
    <>
      <Card className="h-[20rem] xl:h-auto xl:row-span-2 xl:col-span-1 flex flex-col">
        <CardHeader>
          <CardTitle>Sentiment Analysis</CardTitle>
          <CardDescription>Sentiment Scores</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col flex-grow gap-2 overflow-y-auto">
          <span className="text-2xl font-bold">63%</span>
        </CardContent>
        <CardFooter className="justify-end">
          <Button variant={"default"}>Detailed</Button>
        </CardFooter>
      </Card>
    </>
  );
}
