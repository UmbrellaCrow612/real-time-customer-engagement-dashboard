import Link from "next/link";
import { Button } from "../ui/button";

const options = [
  {
    href: "/",
    label: "Analytics",
  },
  {
    href: "/",
    label: "Alerts",
  },
  {
    href: "/",
    label: "Feed",
  },
  {
    href: "/",
    label: "Sentiments",
  },
  {
    href: "/",
    label: "Metrics",
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
