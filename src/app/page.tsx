import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-xl xl:h-[50rem] px-4 xl:px-0 xl:grid xl:grid-flow-col xl:grid-rows-4 xl:gap-6">
      <div className="h-[20rem] xl:h-auto xl:row-span-2">
        <Card className="w-full h-full">hello</Card>
      </div>
      <div className="h-[20rem] xl:h-auto xl:row-span-2">
        <Card className="w-full h-full">hello</Card>
      </div>
      <div className="h-[40rem] xl:h-auto xl:row-span-4">
        <Card className="w-full h-full">hello</Card>
      </div>
      <div className="h-[10rem] xl:h-auto xl:row-span-1">
        <Card className="w-full h-full">hello</Card>
      </div>
      <div className="h-[30rem] xl:h-auto xl:row-span-3">
        <Card className="w-full h-full">hello</Card>
      </div>
    </div>
  );
}
