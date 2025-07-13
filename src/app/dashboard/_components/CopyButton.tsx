"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export const CopyButton = ({ content }: { content: string }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(content);
  };

  return (
    <Button
      size="sm"
      variant="link"
      className="text-purple-600 p-0"
      onClick={handleCopy}
    >
      Copy
    </Button>
  );
};
