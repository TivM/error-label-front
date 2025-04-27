import React from "react";
import { useAppSelector } from "../hooks";

const DocumentViewer: React.FC = () => {
  const activeDocId = useAppSelector((s) => s.documents.activeId);
  const analyzing = useAppSelector((s) => s.documents.analyzing);
  const errors = useAppSelector((s) => s.errors.errors);
  const selectedErrorId = useAppSelector((s) => s.errors.selectedErrorId);
  const doc = useAppSelector((s) => s.documents.documents.find((d) => d.id === activeDocId));

  return (
    <div className="relative flex-1 flex items-center justify-center border rounded-md bg-white">
      {doc ? (
        <div className="w-[640px] h-[360px] bg-gray-100 flex items-center justify-center">
          <span className="text-gray-500">{doc.name}</span>
          {errors.map((err) => (
            <div
              key={err.id}
              className={`absolute border-2 ${err.id === selectedErrorId ? "border-purple-500" : "border-red-400"} pointer-events-none`}
              style={{ left: err.bbox.x, top: err.bbox.y, width: err.bbox.w, height: err.bbox.h }}
            />
          ))}
        </div>
      ) : (
        <span className="text-gray-400">Выберите документ</span>
      )}

      {analyzing && (
        <div className="absolute inset-0 backdrop-blur-sm flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-purple-500"></div>
        </div>
      )}
    </div>
  );
};

export default DocumentViewer;
