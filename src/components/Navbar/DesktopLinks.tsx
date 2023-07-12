import Link from "next/link";
import { Button } from "../ui/button";

const options = [
  {
    href: "/",
    label: "op 1",
  },
  {
    href: "/",
    label: "op 2",
  },
  {
    href: "/",
    label: "op 3",
  },
  {
    href: "/",
    label: "op 4",
  },
];
export default function DesktopLinks() {
  return (
    <>
      <div className="hidden gap-6 md:flex">
        {options.map((op) => (
          <Button asChild variant={"link"} key={op.label}>
            <Link href={op.href}>{op.label}</Link>
          </Button>
        ))}
      </div>
    </>
  );
}
