"use client"
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db';
import { AIOutput, UserSubscription, } from '@/utils/Schema';
import { useUser } from '@clerk/nextjs';
import { HISTORY } from '../history/page';
import { eq, desc } from "drizzle-orm";
import { TotalUsageContext } from '@/app/(context)/TotalContextUsage';
import { UserSubscriptionsContext } from '@/app/(context)/UserSubscribtionsConntext';
import { UpdateUsageCreditsContext } from '@/app/(context)/UpdateUsageCreditsContext';

function UseAgeTrack() {
    const { user } = useUser();
    const { totalUsage, setTotalUsage } = React.useContext(TotalUsageContext);
    const { userSubscriptions, setUserSubscriptions } = React.useContext(UserSubscriptionsContext);
    const { updateUsageCredits, setUpdateUsageCredits } = React.useContext(UpdateUsageCreditsContext);
    const [maxWindth, setMaxWindth] = useState(10000);
    useEffect(() => {
        user && GetData();
        user && isUserSubscribe();
    }, [user]);

    useEffect(() => {
        user && GetData();
    }, [updateUsageCredits && user])
    const GetData = async () => {
        const email = user?.primaryEmailAddress?.emailAddress;

        if (!email) return; // 🛑 stop if email is undefined
        {/* @ts-ignore */ }
        const result: HISTORY[] = await db
            .select()
            .from(AIOutput)
            .where(eq(AIOutput.createdBy, email)); // ✅ email is definitely string now

        GetTotalUsage(result);
    };

    const isUserSubscribe = async () => {
        const email = user?.primaryEmailAddress?.emailAddress;

        if (!email) return; // 🛑 stop if email is undefined
        {/* @ts-ignore */ }
        let result = await db.select().from(UserSubscription).where(eq(UserSubscription.email, email));
        console.log("result", result);
        console.log("userSubscriptions", userSubscriptions.email);
        if (result) {
            setUserSubscriptions(true);
            setMaxWindth(1000000)
        }
    }

    const GetTotalUsage = (result: HISTORY[]) => {
        let total: number = 0;

        result.forEach((element) => {
            total += Number(element.aiResponse?.length || 0);
        });
        setTotalUsage(total)
        console.log("Total usage:", total);
    };
    return (
        <div className='m-5'>
            <div className='bg-purple-500 text-white rounded-lg p-3'>
                <h2 className='font-medium'>Credits</h2>
                <div className='h-2 bg-[#9981f9] w-full rounded-full'>
                    <div className='h-2 bg-white rounded-full' style={{
                        width: `${(totalUsage / maxWindth) * 100}%`
                    }}></div>
                </div>
                <h2 className='text-sm my-2'>{totalUsage}/ {maxWindth} Credits Used</h2>
            </div>
            <Button className='w-full my-3 bg-gray-200 hover:bg-gray-300 text-purple-600 font-semibold'>Upgrade</Button>

        </div>
    )
}

export default UseAgeTrack
