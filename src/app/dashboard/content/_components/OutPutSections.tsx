'use client';

import React, { useEffect, useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface PROPS {
  aiOutPut: string;
}

const OutPutSections = ({ aiOutPut }: PROPS) => {
  const editorRef = useRef<Editor>(null);

  useEffect(() => {
    const editorInstance = editorRef.current?.getInstance?.();
    if (editorInstance && aiOutPut) {
      editorInstance.setMarkdown(aiOutPut);
    }
  }, [aiOutPut]);

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="text-medium text-lg">Your Result</h2>
        <Button
          className="flex gap-2 bg-purple-600 hover:bg-purple-500"
          onClick={() => {
            const content = editorRef.current?.getInstance?.().getMarkdown();
            if (content) navigator.clipboard.writeText(content);
          }}
        >
          <Copy className="w-4 h-4" />
          Copy
        </Button>
      </div>

      <Editor
        ref={editorRef}
        initialValue="Your result appears here"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        height="450px"
        onChange={() =>
          console.log(editorRef.current?.getInstance?.().getMarkdown())
        }
      />
    </div>
  );
};

export default OutPutSections;
