import ChannelAnalytics from "@/components/HomeDashboard/ChannelAnalytics";
import CustomAlerts from "@/components/HomeDashboard/CustomAlerts";
import EngagementMetrics from "@/components/HomeDashboard/EngagementMetrics";
import LiveFeed from "@/components/HomeDashboard/LiveFeed";
import SentimentGraph from "@/components/HomeDashboard/SentimentGraph";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-xl xl:h-[45rem] px-4 xl:px-0 xl:grid xl:grid-flow-col xl:grid-rows-4 xl:gap-6 xl:grid-cols-3 space-y-4 xl:space-y-0">
      <ChannelAnalytics />
      <CustomAlerts />
      <LiveFeed />
      <SentimentGraph />
      <EngagementMetrics />
    </div>
  );
}
