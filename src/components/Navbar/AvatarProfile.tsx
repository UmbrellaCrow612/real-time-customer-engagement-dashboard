import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function AvatarProfile() {
  return (
    <>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </>
  );
}
