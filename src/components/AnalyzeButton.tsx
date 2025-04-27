import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setAnalyzing } from "../features/documents/documentsSlice";
import { setErrors } from "../features/errors/errorsSlice";
import { useAnalyzeMutation } from "../features/documents/documentsApi";

const AnalyzeButton: React.FC = () => {
  const activeDocId = useAppSelector((s) => s.documents.activeId);
  if (useAnalyzeMutation) {
    const [analyze] = useAnalyzeMutation();
  }
  const dispatch = useAppDispatch();

  async function handleClick() {
    if (!activeDocId) return;
    dispatch(setAnalyzing(true));
    try {
      const errors = await analyze({ documentId: activeDocId }).unwrap();
      dispatch(setErrors(errors));
    } catch {
      dispatch(setErrors([]));
    } finally {
      dispatch(setAnalyzing(false));
    }
  }

  return (
      <button
          disabled={!activeDocId}
          onClick={handleClick}
          className="px-6 py-2 rounded-md bg-purple-600 text-white disabled:bg-gray-400"
      >
        Анализировать
      </button>
  );
};

export default AnalyzeButton;