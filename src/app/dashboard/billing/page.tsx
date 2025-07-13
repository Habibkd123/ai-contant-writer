"use client";

import React from "react";
import axios from "axios";
import { Loader2Icon } from "lucide-react";
import { db } from "@/utils/db";
import { UserSubscription } from "@/utils/Schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { UserSubscriptionsContext } from "@/app/(context)/UserSubscribtionsConntext";

let plans = [
  {
    title: "Free",
    price: "0$",
    subtitle: "/month",
    features: [
      "10,000 Words/Month",
      "50+ Content Templates",
      "Unlimited Download & Copy",
      "1 Month of History",
    ],
    isActive: true,
    button: "",
  },
  {
    title: "Monthly",
    price: "9.99$",
    subtitle: "/month",
    features: [
      "1,00,000 Words/Month",
      "50+ Template Access",
      "Unlimited Download & Copy",
      "1 Year of History",
    ],
    isActive: false,
    button: "Get Started",
  },
];

export default function PricingPage() {
  const [loading, setLoading] = React.useState(false);

  const { userSubscriptions } = React.useContext(UserSubscriptionsContext);
  plans = plans.map((plan) => {
    if (userSubscriptions && plan.title === "Monthly") {
      return { ...plan, isActive: true, button: "Currently Active Plan" };
    } else if (plan.title === "Free") {
      return { ...plan, button: "" };
    }
    return plan;
  });
  const { user } = useUser()
  const CreateSubscription = async () => {
    setLoading(true);
    try {
      const resp = await axios.post("/api/create-subscribtion", {});
      console.log("Subscription Created:", resp.data);
      OnPayment(resp.data.id);
    } catch (error) {
      console.error("Subscription API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const OnPayment = (subId: string) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      subscription_id: subId,
      name: "container AI Apps",
      description: "Monthly Subscription",
      handler: async (resp: any) => {
        console.log("Payment Success:", resp);
        if(resp.razorpay_payment_id) {
          await SaveSubscribtions(resp.razorpay_payment_id)
        }
        // You can call your backend API here to verify and activate subscription
        setLoading(false);
      },
      theme: {
        color: "#3b82f6",
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };


  const SaveSubscribtions = async (paymentId: string) => {
      const email = user?.primaryEmailAddress?.emailAddress;

  if (!email) return; // 🛑 stop if email is undefined
 {/* @ts-ignore */ }
    const result = await db.insert(UserSubscription).values(
      {
        paymentId: paymentId,
        email: user?.primaryEmailAddress?.emailAddress ?? 'unknown',
        userName: user?.fullName ?? 'unknown',
        active: true,
        createdAt: moment().format('DD/MM/YYYY')
      });

    console.log("result", result);
  }
  return (
    <div className="min-h-screen bg-[#f3f5fb] px-4 py-12 flex flex-col items-center ">
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>

      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        Upgrade With Monthly Plan
      </h1>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl h-[450px] ">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="flex-1 bg-white rounded-xl shadow-md border border-gray-300 p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold mb-1">{plan.title}</h2>
              <p className="text-4xl font-bold">
                {plan.price}
                <span className="text-base font-normal text-gray-500">
                  {plan.subtitle}
                </span>
              </p>

              <ul className="mt-6 space-y-2 text-gray-700">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-[#3b82f6] font-bold">✓</span> {feat}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              {plan.isActive ? (
                <button className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold py-2 rounded-full cursor-not-allowed">
                  {plan.button}
                </button>
              ) : (
                <button
                  onClick={CreateSubscription}
                  className="w-full border border-blue-600 text-blue-600 font-semibold py-2 rounded-full hover:bg-blue-50 transition"
                >
                  {loading && <Loader2Icon className='animate-spin' />} {plan.button}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


