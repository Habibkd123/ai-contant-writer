import { NextResponse } from "next/server";
import Razorpay  from 'razorpay';

export async function POST(request) {
    const instance = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
        plan_id:process.env.SUBSCRIPTION_PLAN_ID,
        customer_notify: 1, 
        quantity: 1,
        notes: {
            key1: "value3",
        },
        total_count: 1,
        addons: [ ],
    };

    const result = await instance.subscriptions.create(options);
    return NextResponse.json(result);
}