import AvatarProfile from "./AvatarProfile";
import DesktopLinks from "./DesktopLinks";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between w-full h-16 max-w-screen-xl px-6 mx-auto">
        <MobileMenu />
        <DesktopLinks />
        <AvatarProfile />
      </nav>
    </>
  );
}
