import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DocumentItem {
  id: number;
  name: string;
  color: string;
}

interface DocumentsState {
  documents: DocumentItem[];
  activeId: number | null;
  analyzing: boolean;
}

const initialState: DocumentsState = { documents: [], activeId: null, analyzing: false };

export const documentsSlice = createSlice({
  name: "documents",
  initialState,
  reducers: {
    setDocuments(state, action: PayloadAction<DocumentItem[]>) {
      state.documents = action.payload;
    },
    addDocument(state, action: PayloadAction<DocumentItem>) {
      state.documents.push(action.payload);
    },
    reorderDocuments(state, action: PayloadAction<DocumentItem[]>) {
      state.documents = action.payload;
    },
    setActiveDocument(state, action: PayloadAction<number | null>) {
      state.activeId = action.payload;
    },
    setAnalyzing(state, action: PayloadAction<boolean>) {
      state.analyzing = action.payload;
    },
  },
});

export const {
  setDocuments,
  addDocument,
  reorderDocuments,
  setActiveDocument,
  setAnalyzing,
} = documentsSlice.actions;
export default documentsSlice.reducer;
