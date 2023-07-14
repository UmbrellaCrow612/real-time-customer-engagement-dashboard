import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

export default function MobileMenu() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"outline"}>
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent className="md:w-[400px] w-3/4" side={"left"}>
          <SheetHeader>
            <SheetTitle>Explore</SheetTitle>
            <SheetDescription>
              Go to different parts of the website
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-3 mt-4">
            <Button variant={"default"} className="w-full">
              Dashboard
            </Button>
            <Button variant={"outline"} className="w-full">
              Account
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
