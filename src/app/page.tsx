export default function Home() {
  return (
    <div className="mx-auto max-w-screen-xl h-[50rem] border px-4 xl:px-0 grid grid-flow-col grid-rows-4">
      <div className="row-span-2 border">Left Card 1</div>
      <div className="row-span-2 border">Left Card 2</div>
      <div className="row-span-4 border">Middle Card</div>
      <div className="row-span-1 border">Right Card 1</div>
      <div className="row-span-3 border">Right Card 2</div>
    </div>
  );
}
