import React from "react";
import DocumentList from "../components/DocumentList";
import DocumentViewer from "../components/DocumentViewer";
import ErrorList from "../components/ErrorList";
import AnalyzeButton from "../components/AnalyzeButton";

const Project: React.FC = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="w-60 border-r p-2 overflow-y-auto">
        <DocumentList />
      </aside>
      <main className="flex-1 flex flex-col gap-4 p-4">
        <DocumentViewer />
        <AnalyzeButton />
        <ErrorList />
      </main>
    </div>
  );
};

export default Project;
