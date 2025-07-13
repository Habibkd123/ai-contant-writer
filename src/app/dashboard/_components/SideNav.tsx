"use client";
import { useEffect } from "react";
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import UseAgeTrack from "./UseAgeTrack";
import Link from "next/link";

export const SideNav = () => {
  const path = usePathname();


  const MenuList = [
    {
      name: "Dashboard", icon: Home, path: "/dashboard"
    },
    {
      name: "History", icon: FileClock, path: "/dashboard/history"
    },
    {
      name: "Billing", icon: WalletCards, path: "/dashboard/billing"
    },
    {
      name: "Settings", icon: Settings, path: "/dashboard/setting"
    },
  ]
  return (
    <div className="p-4 h-screen relative shadow-sm  top-0">
      <Image src="/hearderLogo.svg" alt="Vercel Logo" width={100} height={100} />
      <hr className="my-6 border" />
      <div className="space-y-4 mt-3">
        {MenuList.map((item, index) => (
          <Link key={index} href={item.path}>
            <div key={index} className={`flex items-center space-x-2 gap-2 p-3 mb-2  hover:bg-purple-600 hover:text-white rounded-lg cursor-pointer ${path === item.path ? "bg-purple-600 text-white" : ""}`}>
              <item.icon className="w-6 h-6" />
              <span className="text-lg">{item.name}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-5 left-0 w-full">
        <UseAgeTrack />
      </div>
    </div>
  );
};
