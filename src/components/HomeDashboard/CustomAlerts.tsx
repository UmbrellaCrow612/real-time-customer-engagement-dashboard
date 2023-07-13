import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function CustomAlerts() {
  return (
    <>
      <Card className="h-[20rem] xl:h-auto xl:row-span-2 xl:col-span-1 flex flex-col">
        <CardHeader>
          <CardTitle>Custom Alerts</CardTitle>
          <CardDescription>
            Set alerts to go off for certain events
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col flex-grow gap-2 overflow-y-auto">
          <AlertCard
            title="Booming response"
            description="Your YouTube customer sentiment has increased by 30%"
            red={false}
            time="2:34"
          />
          <AlertCard
            title="Uh Oh!"
            description="Your Mail Customer Sentiment Has Decreased By 20%"
            red={true}
            time="13:34"
          />
          <AlertCard
            title="Uh Oh!"
            description="Your Instagram Customer Sentiment Has Decreased By 20%"
            red={true}
            time="12:34"
          />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant={"outline"}>Add</Button>
          <Button variant={"default"}>View</Button>
        </CardFooter>
      </Card>
    </>
  );
}

const AlertCard = ({
  red,
  title,
  description,
  time,
}: {
  red: boolean;
  title: string;
  description: string;
  time: string;
}) => {
  return (
    <>
      <Alert variant={red ? "destructive" : "default"}>
        <Terminal className="w-4 h-4" />
        <AlertTitle className="justify-between">
          {title} At {time}
        </AlertTitle>
        <AlertDescription>{description}</AlertDescription>
      </Alert>
    </>
  );
};
