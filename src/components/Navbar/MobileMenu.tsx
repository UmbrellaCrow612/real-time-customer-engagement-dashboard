import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";

export default function MobileMenu() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button>
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent className="md:w-[400px] w-3/4" side={"left"}>
          <SheetHeader>
            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}
