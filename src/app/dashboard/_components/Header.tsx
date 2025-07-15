import ThemeToggle from "@/components/ThemeToggle";
import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";

export const Header: React.FC = () => {
  return (
    <div className="p-5 border-b shadow-sm flex items-center justify-between bg-background text-foreground">
      <div className="flex gap-2 items-center border p-2 rounded-md max-w-2lg">
        <Search />
        <input placeholder="search here" className="focus:outline-none" type="text" />

      </div>
      <div className="flex gap-2 items-center">
         <ThemeToggle />
        <h2 className="bg-primary p-1 rounded-full text-xs text-white px-2">🔥Join Membership just  for $9.99/Month</h2>
      <UserButton/>
      </div>
    </div>
  );
};
