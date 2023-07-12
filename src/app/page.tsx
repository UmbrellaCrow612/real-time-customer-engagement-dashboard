import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-xl xl:h-[50rem] px-4 xl:px-0 xl:grid xl:grid-flow-col xl:grid-rows-4 xl:gap-6 xl:grid-cols-3">
      <div className="h-[20rem] xl:h-auto xl:row-span-2 xl:col-span-1 overflow-auto">
        <Card className="w-full h-full">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
      <div className="h-[20rem] xl:h-auto xl:row-span-2 xl:col-span-1">
        <Card className="w-full h-full">hello</Card>
      </div>
      <div className="h-[40rem] xl:h-auto xl:row-span-4 xl:col-span-1">
        <Card className="w-full h-full">hello</Card>
      </div>
      <div className="h-[10rem] xl:h-auto xl:row-span-1 xl:col-span-1">
        <Card className="w-full h-full">hello</Card>
      </div>
      <div className="h-[30rem] xl:h-auto xl:row-span-3 xl:col-span-1">
        <Card className="w-full h-full">hello</Card>
      </div>
    </div>
  );
}
