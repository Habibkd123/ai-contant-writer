"use client";

import { useState } from "react";
import SearchSection from "./_components/SearchSection";
import TemplateListSections from "./_components/TemplateListSections";

export default function DashboardPage() {
  const [userSearchInput, setUserSearchInput] = useState<string>("");

  return (
    <div>
      <SearchSection onSearchInput={(value: string) => setUserSearchInput(value)} />
      <TemplateListSections userSearchInput={userSearchInput} />
    </div>
  );
}
