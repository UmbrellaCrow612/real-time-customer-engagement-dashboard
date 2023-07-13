import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import {
  MailIcon,
  PhoneIcon,
  MessageCircleIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
  ActivityIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const ChannelOptions = [
  {
    Icon: MailIcon,
    description: "Mail",
    performance: "34",
  },
  {
    Icon: PhoneIcon,
    description: "Phone Call",
    performance: "45",
  },
  {
    Icon: MessageCircleIcon,
    description: "Live Chat",
    performance: "56",
  },
  {
    Icon: FacebookIcon,
    description: "Facebook",
    performance: "66",
  },
  {
    Icon: TwitterIcon,
    description: "Twitter",
    performance: "46",
  },
  {
    Icon: InstagramIcon,
    description: "Instagram",
    performance: "36",
  },
  {
    Icon: LinkedinIcon,
    description: "Linkedin",
    performance: "76",
  },
  {
    Icon: YoutubeIcon,
    description: "YouTube",
    performance: "52",
  },
];

export default function ChannelAnalytics() {
  return (
    <>
      <Card className="h-[20rem] xl:h-auto xl:row-span-2 xl:col-span-1 flex flex-col">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Channel Analytics <ActivityIcon className="w-4 h-4" />
          </CardTitle>
          <CardDescription>
            View the media response of your company
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col flex-grow gap-2 overflow-y-auto">
          {ChannelOptions.map((op) => (
            <ChannelCard
              Icon={op.Icon}
              description={op.description}
              performance={op.performance}
              key={op.performance}
            />
          ))}
        </CardContent>
        <CardFooter className="flex justify-between">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Filter</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Ascending</DropdownMenuItem>
              <DropdownMenuItem>Descending</DropdownMenuItem>
              <DropdownMenuItem>New</DropdownMenuItem>
              <DropdownMenuItem>Old</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button>Detailed</Button>
        </CardFooter>
      </Card>
    </>
  );
}

const ChannelCard = ({
  Icon,
  description,
  performance,
}: {
  Icon: any;
  description: string;
  performance: string;
}) => {
  return (
    <>
      <Button className="justify-between w-full" variant={"outline"}>
        <Icon className="w-4 h-4 mr-2" />
        {description}{" "}
        <span className={Number(performance) < 40 ? "text-destructive" : "text-green-500"}>{performance}</span>
      </Button>
    </>
  );
};
