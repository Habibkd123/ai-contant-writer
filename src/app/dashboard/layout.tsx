"use client";
import { useState } from "react";
import { SideNav } from "./_components/SideNav";
import { Header } from "./_components/Header";
import { TotalUsageContext } from "../(context)/TotalContextUsage";
import { UserSubscriptionsContext } from "../(context)/UserSubscribtionsConntext";
import { UpdateUsageCreditsContext } from "../(context)/UpdateUsageCreditsContext";
import { DarkModeContext } from "../(context)/DarkModeContext";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [totalUsage, setTotalUsage] = useState<any>(0);
  const [userSubscriptions, setUserSubscriptions] = useState<boolean>(false);
  const [updateUsageCredits, setUpdateUsageCredits] = useState<any>(null);
  const [updateDark, setUpdateDark] = useState<any>(null);
  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      <UserSubscriptionsContext.Provider value={{ userSubscriptions, setUserSubscriptions }} >
        <UpdateUsageCreditsContext.Provider value={{ updateUsageCredits, setUpdateUsageCredits }} >
          <DarkModeContext.Provider value={{ updateDark, setUpdateDark }} >
            <div className="min-h-screen bg-slate-100 flex">
              <div className="md:w-64 hidden md:block fixed">
                <SideNav />
              </div>

              <main className="md:ml-64 flex-1 flex flex-col  sticky top-0">
                <Header />
                <div className="flex-1 overflow-y-auto">
                  {children}
                </div>
              </main>
            </div>
          </DarkModeContext.Provider>
        </UpdateUsageCreditsContext.Provider>
      </UserSubscriptionsContext.Provider>
    </TotalUsageContext.Provider>
  );
}
