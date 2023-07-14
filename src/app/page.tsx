import ChannelAnalytics from "@/components/HomeDashboard/ChannelAnalytics";
import CustomAlerts from "@/components/HomeDashboard/CustomAlerts";
import LiveFeed from "@/components/HomeDashboard/LiveFeed";
import SentimentGraph from "@/components/HomeDashboard/SentimentGraph";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-xl xl:h-[45rem] px-4 xl:px-0 xl:grid xl:grid-flow-col xl:grid-rows-4 xl:gap-6 xl:grid-cols-3">
      <ChannelAnalytics />
      <CustomAlerts />
      <LiveFeed />
      <SentimentGraph />
      <div className="h-[20rem] xl:h-auto xl:row-span-2 xl:col-span-1 flex flex-col">
        <Card className="w-full h-full">hello</Card>
      </div>
    </div>
  );
}
