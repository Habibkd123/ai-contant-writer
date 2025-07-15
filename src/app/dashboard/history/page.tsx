import React from "react";
import Image from "next/image";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/Schema";
import { eq, desc } from "drizzle-orm";
import Templates from "@/app/(data)/Templates";
import { TEMPLATE } from "../_components/TemplateListSections";
import { CopyButton } from "../_components/CopyButton";

export interface HISTORY {
  id: number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
  createdAt: string;
}

const HistoryTable = async () => {
  const user = await currentUser();

  if (!user) return <div className="p-6">Please login to see history.</div>;
{/* @ts-ignore */}
  const result: HISTORY[] = await db
    .select()
    .from(AIOutput)
    .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress || ""))
    .orderBy(desc(AIOutput.id));

  return (
    <div className="px-6 py-8 bg-background text-foreground">
      <div>
        <h2 className="text-2xl font-semibold">History</h2>
        <p className="text-sm text-muted-foreground">
          Search your previously generated AI content
        </p>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full table-auto text-left text-sm">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="py-3 font-medium">TEMPLATE</th>
              <th className="py-3 font-medium">AI RESP</th>
              <th className="py-3 font-medium">DATE</th>
              <th className="py-3 font-medium">WORDS</th>
              <th className="py-3 font-medium">COPY</th>
            </tr>
          </thead>
          <tbody>
            {result.map((item, idx) => {
              const template: TEMPLATE | undefined = Templates.find(
                (t) => t.slug ==item.templateSlug
              );
              return (
                <tr key={idx} className="border-b border-gray-100">
                  <td className="py-4 flex items-center gap-2">
                    {template && (
                      <Image
                        src={template.icon}
                        alt="template-icon"
                        width={24}
                        height={24}
                        className="rounded"
                      />
                    )}
                    <span className="font-medium">
                      {template?.name || item.templateSlug}
                    </span>
                  </td>
                  <td className="py-4 max-w-[300px] truncate text-gray-600">
                    {item.aiResponse}
                  </td>
                  <td className="py-4">
                    {item.createdAt}
                  </td>
                  <td className="py-4">
                    {item.aiResponse?.length}
                  </td>
                  <td className="py-4">
                    {/* Since it's SSR, copy should be handled client-side via small component */}
                    <CopyButton content={item.aiResponse} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryTable;
