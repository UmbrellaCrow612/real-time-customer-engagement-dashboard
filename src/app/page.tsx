import ChannelAnalytics from "@/components/HomeDashboard/ChannelAnalytics";
import CustomAlerts from "@/components/HomeDashboard/CustomAlerts";
import LiveFeed from "@/components/HomeDashboard/LiveFeed";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-xl xl:h-[45rem] px-4 xl:px-0 xl:grid xl:grid-flow-col xl:grid-rows-4 xl:gap-6 xl:grid-cols-3">
      <ChannelAnalytics />
      <CustomAlerts />
      <LiveFeed />
      <div className="h-[10rem] xl:h-auto xl:row-span-1 xl:col-span-1 overflow-auto">
        <Card className="w-full h-full">hello</Card>
      </div>
      <div className="h-[30rem] xl:h-auto xl:row-span-3 xl:col-span-1 overflow-auto">
        <Card className="w-full h-full">hello</Card>
      </div>
    </div>
  );
}
